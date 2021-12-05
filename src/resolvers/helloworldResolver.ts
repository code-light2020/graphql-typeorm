import { Resolver, Query } from "type-graphql";

@Resolver()
export class HelloWordResolver {
  @Query(() => String)
  async helloworld() {
    return "Hello World";
  }
}
