import { Users } from "src/users/entities/users.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Users)
export class usersRepository extends Repository<Users> {}
