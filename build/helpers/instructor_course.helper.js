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
exports.checkInstructor = void 0;
const course_model_1 = __importDefault(require("../models/course.model"));
const checkInstructor = (instructorId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_model_1.default.findOne({
        instructorId,
        _id: courseId
    });
    if (!course)
        throw new Error('Course Not Found');
    return courseId;
});
exports.checkInstructor = checkInstructor;
//# sourceMappingURL=instructor_course.helper.js.map