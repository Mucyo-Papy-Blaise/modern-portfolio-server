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
const skill_models_1 = __importDefault(require("../models/skill.models"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const rod_fileupload_1 = __importDefault(require("rod-fileupload"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post('/', (0, rod_fileupload_1.default)('image', cloudinary_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, title, level, percentage } = req.body;
        yield skill_models_1.default.create({
            image: image.url,
            title,
            level,
            percentage,
        });
        res.status(201).json({ message: "Skills Created Successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to Create Skills Entery!', error: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield skill_models_1.default.find();
        res.status(201).json(skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to Fetch Skills!', error: error.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield skill_models_1.default.findOneAndDelete({ _id: id });
        res.status(201).json({ message: 'Delete Skill Successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Delete Skill", error: error.message });
    }
}));
exports.default = router;
