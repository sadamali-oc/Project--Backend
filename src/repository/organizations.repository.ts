import { Organizations } from "src/organizations/entities/organizations.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Organizations)
export class organizationRepository extends Repository<Organizations> {}
