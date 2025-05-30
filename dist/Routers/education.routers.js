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
const education_models_1 = __importDefault(require("../models/education.models"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startYear, endYear, program, school, degree } = req.body;
        yield education_models_1.default.create({
            startYear: new Date(startYear),
            endYear: new Date(endYear),
            program,
            school,
            degree,
        });
        res.status(201).json({ message: 'education created successfully' });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create Education", error: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const educations = yield education_models_1.default.find();
        res.status(201).json(educations);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Fetch education Data", error: error.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield education_models_1.default.findOneAndDelete({ _id: id });
        res.status(201).json({ message: 'Education deleted successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to Delete Education!', error: error.message });
    }
}));
exports.default = router;
