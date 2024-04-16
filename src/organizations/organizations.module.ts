import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Organizations} from "./entities/organizations.entity";
import { OrganizationService } from "./organizations.service";
import { OrganizationController } from "./organizations.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Organizations])],
  providers: [OrganizationService],
  controllers: [OrganizationController],
})
export class OrganizationsModule {}
