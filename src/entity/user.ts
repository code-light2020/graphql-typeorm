import { Entity, Column, BaseEntity,PrimaryGeneratedColumn} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";


@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  @Field()
  name!: string;
  @Column()
  @Field()
  email!: string;
}
