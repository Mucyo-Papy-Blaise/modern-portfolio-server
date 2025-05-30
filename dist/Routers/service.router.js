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
const service_models_1 = __importDefault(require("../models/service.models"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { icon, serviceName, description, features } = req.body;
        yield service_models_1.default.create({
            icon,
            serviceName,
            description,
            features,
        });
        res.status(201).json({ message: "Service Created Successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to Create Service!' });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield service_models_1.default.find();
        res.status(201).json({ services });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to Get Services entery' });
    }
}));
exports.default = router;
