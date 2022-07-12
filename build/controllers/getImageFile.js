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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var checkExistImage_1 = __importDefault(require("../util/checkExistImage"));
var resizeImage_1 = __importDefault(require("../util/resizeImage"));
var getImageFile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, imageWidth, imageHeight, originalImage, resizedImage, existImage, image, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileName = req.query.filename;
                imageWidth = parseInt(req.query.width);
                imageHeight = parseInt(req.query.height);
                originalImage = "images/full/".concat(fileName, ".jpg");
                resizedImage = "images/full/".concat(fileName, "-").concat(imageWidth, "-").concat(imageHeight, ".jpg");
                existImage = (0, checkExistImage_1.default)({ fileName: fileName, imageWidth: imageWidth, imageHeight: imageHeight });
                console.log(existImage);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                if (!existImage) return [3 /*break*/, 2];
                console.log('image is exist');
                return [2 /*return*/, res
                        .status(200)
                        .contentType('jpeg')
                        .send(fs_1.default.readFileSync("images/full/".concat(existImage)))];
            case 2:
                if (!(fileName && !imageHeight && !imageWidth)) return [3 /*break*/, 3];
                res.status(200).contentType('jpeg').send(fs_1.default.readFileSync(originalImage));
                return [3 /*break*/, 8];
            case 3:
                if (!(imageWidth && !imageHeight)) return [3 /*break*/, 4];
                res.status(400).send('please provide image height!');
                return [3 /*break*/, 8];
            case 4:
                if (!(imageHeight && !imageWidth)) return [3 /*break*/, 5];
                res.status(400).send('please provide image width!');
                return [3 /*break*/, 8];
            case 5:
                if (!(imageHeight < 0 || imageWidth < 0)) return [3 /*break*/, 6];
                res.status(400).send('please provide positive integer');
                return [3 /*break*/, 8];
            case 6:
                if (!(fileName && imageHeight && imageWidth)) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, resizeImage_1.default)({
                        originalImage: originalImage,
                        imageWidth: imageWidth,
                        imageHeight: imageHeight,
                        resizedImage: resizedImage,
                    })];
            case 7:
                _a.sent();
                image = fs_1.default.readFileSync(resizedImage);
                console.log('image resized');
                res.status(200).contentType('jpeg').send(image);
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_1 = _a.sent();
                return [2 /*return*/, error_1];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.default = getImageFile;
