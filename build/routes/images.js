"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getImageFile_1 = __importDefault(require("../controllers/getImageFile"));
var route = express_1.default.Router();
route.get('/', getImageFile_1.default);
exports.default = route;
