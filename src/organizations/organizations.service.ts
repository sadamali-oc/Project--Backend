import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Organizations } from "./entities/organizations.entity";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organizations)
    private readonly organizationsRepository: Repository<Organizations>
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = this.organizationsRepository.create(
      createOrganizationDto
    );
    return await this.organizationsRepository.save(organization);
  }

  async findAll() {
    return await this.organizationsRepository.find();
  }

  async findOne(id: number) {
    return await this.organizationsRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateOrganizationDto) {
    const organization = await this.findOne(id);
    if (!organization) {
      throw new NotFoundException();
    }
    Object.assign(organization, updateUserDto);
    return await this.organizationsRepository.save(organization);
  }

  async remove(id: number) {
    const organization = await this.findOne(id);
    if (!organization) {
      throw new NotFoundException();
    }
    return await this.organizationsRepository.remove(organization);
  }
}
