import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    // Create a testing module with the AppController and AppService
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // Get an instance of the AppController for testing
    appController = app.get<AppController>(AppController);
  });

  // Describe the 'root' endpoint test
  describe("root", () => {
    // Test the 'getHello' method of the AppController
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
