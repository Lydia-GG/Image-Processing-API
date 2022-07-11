"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./routes/images"));
var app = (0, express_1.default)();
var port = 5000;
app.use('/images', images_1.default);
app.listen(port, function () { return console.log("server is running on port ".concat(port)); });
