import { HttpException } from "@nestjs/common";

export class ErrorHandler extends HttpException {
    constructor(message, statusCode) {
        super(message, statusCode);
    }
}