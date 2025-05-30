"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_models_1 = __importDefault(require("../models/profile.models"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const rod_fileupload_1 = require("rod-fileupload");
const route = (0, express_1.default)();
route.use(express_1.default.json());
route.post('/', (0, rod_fileupload_1.uploadMultiple)('file', cloudinary_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const image = req.body.file.find(f => f.type === 'image');
        // @ts-ignore
        const cv = req.body.file.find(f => f.format === 'pdf');
        const description = req.body.description;
        yield profile_models_1.default.create({
            image: image.url,
            cv: cv.url,
            description
        });
        res.status(201).json({ message: "Profile Created successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Create profile", error: error.message });
    }
}));
route.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield profile_models_1.default.find();
        res.status(201).json(profiles);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Fetch Profile Data", error: error.message });
    }
}));
exports.default = route;
