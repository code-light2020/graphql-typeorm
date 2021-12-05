import { User } from "../entity/user";
import { Resolver, Query, Mutation, Arg, InputType, Field } from "type-graphql";

@InputType()
class UserType {
  @Field()
  name!: string;
  @Field()
  email!: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg("user") user: UserType) {
    const newUser = User.create(user);
    return await newUser.save();
  }

  @Query(() => [User])
  async listUsers() {
    return await User.find();
  }
}
