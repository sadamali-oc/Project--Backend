import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "./entities/users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) {}

  // async create(createUserDto: CreateUserDto) {
  //   const user = this.usersRepository.create(createUserDto);
  //   return await this.usersRepository.save(user);
  // }

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user: Users = new Users();
    user.first_name = createUserDto.first_name;
    user.age = createUserDto.age;
    user.email = createUserDto.email;
    user.last_name = createUserDto.last_name;
    user.password = createUserDto.password;
    user.gender = createUserDto.gender;
    user.organization_name = createUserDto.organization_name;
    user.position = createUserDto.position;
    return this.usersRepository.save(user);
  }

  findAllUser(): Promise<Users[]> {
    return this.usersRepository.find();
  }
  async viewUser(id: number): Promise<Users> {
    return this.usersRepository.findOneBy({ id });
  }

  // async findOne(id: number) {
  //   return await this.usersRepository.findOne({
  //     where: { id },
  //   });
  // }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    const user: Users = new Users();
    user.first_name = updateUserDto.first_name;
    user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.last_name = updateUserDto.last_name;
    user.password = updateUserDto.password;
    user.gender = updateUserDto.gender;
    user.organization_name = updateUserDto.organization_name;
    user.position = updateUserDto.position;
    user.id = id;
    return this.usersRepository.save(user);
  }

  async removeUser(id: number) {
    const user = await this.viewUser(id);
    if (!user) {
      throw new NotFoundException();
    }
    return await this.usersRepository.remove(user);
  }
}
