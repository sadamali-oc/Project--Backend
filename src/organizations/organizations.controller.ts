import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { OrganizationService } from "./organizations.service";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { CreateOrganizationDto } from "./dto/create-organization.dto";

@Controller("organizations")
export class OrganizationController {
  constructor(private readonly organizationsService: OrganizationService) {}

  @Post()
  create(@Body() CreateOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(CreateOrganizationDto);
  }

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.organizationsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto
  ) {
    return this.organizationsService.update(+id, updateOrganizationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.organizationsService.remove(+id);
  }
}
