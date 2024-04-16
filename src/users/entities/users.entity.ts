import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  first_name: string;

  @Column({ type: "varchar", length: 30 })
  last_name: string;

  @Column({ type: "varchar", length: 40 })
  email: string;

  @Column({ type: "int" })
  age: number; //5

  @Column({ type: "enum", enum: ["m", "f", "u"] })
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  gender: string;
  //6

  @Column({ type: "varchar" })
  password: string;

  @Column({ length: 100 })
  organization_name: string;

  @Column({ length: 100 })
  position: string;

  @Column({ type: "boolean", default: true })
  active: boolean;
}
