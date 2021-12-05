import { Classe } from "../entity/classe";
import { Resolver, Query, InputType, Mutation, Field, Arg } from "type-graphql";

@InputType()
class ClasseInput {
  @Field()
  number!: string;
}

@Resolver()
export class ClasseResolver {
  @Mutation(() => Classe)
  async createClasse(@Arg("classe",()=>ClasseInput) classe: ClasseInput) {
    const newclasse = Classe.create(classe);
    return await newclasse.save();
  }
  @Query(() => [Classe])
  async getClasse() {
    return await Classe.find();
  }
}
