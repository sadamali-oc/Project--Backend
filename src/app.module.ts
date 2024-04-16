// app.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./users/users.controller";
import { UsersModule } from "./users/users.module";
import { OrganizationController } from "./organizations/organizations.controller";
import { Users } from "./users/entities/users.entity";
import { Organizations } from "./organizations/entities/organizations.entity";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OrganizationsModule } from "./organizations/organizations.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      username: "postgres",
      password: "1234",
      host: "localhost",
      port: 5432,
      database: "plazer-admin",
      synchronize: true,
      entities: [Users, Organizations],
    }),
    UsersModule,
    OrganizationsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
