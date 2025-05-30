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
const env_1 = __importDefault(require("./config/env"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const cors_1 = __importDefault(require("cors"));
const education_routers_1 = __importDefault(require("./Routers/education.routers"));
const experience_router_1 = __importDefault(require("./Routers/experience.router"));
const profile_routers_1 = __importDefault(require("./Routers/profile.routers"));
const project_router_1 = __importDefault(require("./Routers/project.router"));
const service_router_1 = __importDefault(require("./Routers/service.router"));
const blog_router_1 = __importDefault(require("./Routers/blog.router"));
const skill_router_1 = __importDefault(require("./Routers/skill.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));
app.use('/education', education_routers_1.default);
app.use('/experience', experience_router_1.default);
app.use('/profile', profile_routers_1.default);
app.use('/project', project_router_1.default);
app.use('/service', service_router_1.default);
app.use('/blog', blog_router_1.default);
app.use('/skill', skill_router_1.default);
const PORT = env_1.default.port;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, dbConnect_1.default)();
        console.log(`Server is running on PORT ${PORT}`);
    }
    catch (error) {
        console.log('Error in server Running');
    }
}));
