import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getOrg(): string {
    return 'Organizations are here'; //msg passed using get it show in this browser
  }
}
