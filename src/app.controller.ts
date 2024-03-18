// receives req like post and get
import { Controller } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private appService: AppService){}
}