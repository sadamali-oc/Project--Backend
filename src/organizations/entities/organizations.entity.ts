import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "organizations" })
//work with entity
export class Organizations {
  @PrimaryGeneratedColumn() //
  id: number;

  @Column({
    length: 100,
  })
  organization_name: string;

  // @Column({ length: 100 })
  // user_name: string;

  // @Column({ length: 100 })
  // email: string;

  // @Column({ length: 100 })
  // address: string;

  // @Column({ length: 100 })
  // contact_nor: number;

  @Column({ type: "boolean", default: true })
  active: boolean;
}
