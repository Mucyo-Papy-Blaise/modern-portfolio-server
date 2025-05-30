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
const projects_modules_1 = __importDefault(require("../models/projects.modules"));
const rod_fileupload_1 = __importDefault(require("rod-fileupload"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post('/', (0, rod_fileupload_1.default)('image', cloudinary_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectName, category, image, description, tools, features, Livelink, githubLink } = req.body;
        const persTools = JSON.parse(tools);
        const persFeatures = JSON.parse(features);
        yield projects_modules_1.default.create({
            projectName,
            category,
            image: image.url,
            description,
            tools: persTools,
            features: persFeatures,
            Livelink,
            githubLink,
        });
        res.status(201).json({ message: 'Project created successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create projects', error: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield projects_modules_1.default.find();
        res.status(201).json(projects);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to Fetch Project Data!', error: error.message });
    }
}));
exports.default = router;
