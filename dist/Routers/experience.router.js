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
const experience_modules_1 = __importDefault(require("../models/experience.modules"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { company, role, employment, startDate, endDate, current, description } = req.body;
        const experienceData = {
            company,
            role,
            employment,
            startDate: new Date(startDate),
            current,
            description
        };
        if (!current || endDate) {
            experienceData.endDate = new Date(endDate);
        }
        yield experience_modules_1.default.create(experienceData);
        res.status(201).json({ message: 'Experience Created Successfully!' });
        res.status(201).json({ message: 'experience created successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create experience!', error: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const experiences = yield experience_modules_1.default.find();
        res.status(201).json(experiences);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Fetch experiences Data", error: error.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield experience_modules_1.default.findOneAndDelete({ _id: id });
        res.status(201).json({ message: 'Education deleted successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete experience', error: error.message });
    }
}));
exports.default = router;
