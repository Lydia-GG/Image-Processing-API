"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var checkExistImage = function (_a) {
    var fileName = _a.fileName, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
    var existImage = fs_1.default.readdirSync("./images/full").find(function (image) {
        return image
            .split('.')
            .includes("".concat(fileName, "-").concat(imageWidth, "-").concat(imageHeight));
    });
    return existImage;
};
exports.default = checkExistImage;
