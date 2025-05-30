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
const blog_models_1 = __importDefault(require("../models/blog.models"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const rod_fileupload_1 = __importDefault(require("rod-fileupload"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post('/', (0, rod_fileupload_1.default)('image', cloudinary_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, summary, content, author, readTime, category, image, tags } = req.body;
        const tagsPars = JSON.parse(tags);
        yield blog_models_1.default.create({
            title,
            summary,
            content,
            author,
            readTime,
            category,
            image: image.url,
            tags: tagsPars
        });
        res.status(201).json({ message: 'Bloga Created successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to Create blogs', error: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_models_1.default.find();
        res.status(201).json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to get The Blogs Data', error: error.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield blog_models_1.default.findOneAndDelete({ _id: id });
        res.status(201).json({ message: "blog Deleted Successfully!" });
    }
    catch (error) {
        res.status(500).json({ messae: "Failed to Delete Blog Data", error: error.messae });
    }
}));
exports.default = router;
