import { Args,Mutation,Query,Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
    constructor(private readonly userService:UsersService){ }

    @Mutation(() => UserEntity)
    async createUser(
        @Args('createUser') createUserInput:CreateUserInput,
    ):Promise<UserEntity> {
    return await this.userService.createUser(createUserInput)
    }

    @Mutation(() => UserEntity)
    async updateUser(
        @Args('updateUser') updateUserInput:UpdateUserInput
    ):Promise<UserEntity> {
        return await this.userService.updateUser(updateUserInput)
    }
    
    @Mutation(() => Number)
    async removeUser(
        @Args('id') id:number
    ) : Promise<number> {
        return await this.userService.removeUser(+id)
    }

    @Query(() => UserEntity)
    async getOneUser(@Args('id') id:number):Promise<UserEntity> {
        return await this.userService.getOneUser(id)
    }
    
    @Query(() => [UserEntity])
    async getAllUsers():Promise<UserEntity[]> {
        return await this.userService.getAllUsers()
    }


}

