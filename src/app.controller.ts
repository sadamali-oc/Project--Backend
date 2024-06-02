import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Handle GET request to the '/organizations' endpoint
  @Get("/organizations")
  getHello(): string {
    // Call the 'getOrg' method of the AppService and return the result
    return this.appService.getOrg();
  }
}
