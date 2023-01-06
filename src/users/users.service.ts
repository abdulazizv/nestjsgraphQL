import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity)
  private readonly userRepository:Repository<UserEntity>) {}
  
  async createUser(createUserInput: CreateUserInput) :Promise<UserEntity> {
    return await this.userRepository.save({...createUserInput})
  }

  async getAllUsers() :Promise<UserEntity[]> {
    return await this.userRepository.find()
  }

  async getOneUser(id:number):Promise<UserEntity> {
    return await this.userRepository.findOne({ 
      where:{
        id:id
      }
    })
  }

  async updateUser(updateUserInput: UpdateUserInput) {
    await this.userRepository.update(
      {id:updateUserInput.id},
      {...updateUserInput}
    )
    
    return await this.getOneUser(updateUserInput.id)
  }


  async removeUser(id: number):Promise<number> {
    await this.userRepository.delete({id})
    return id
  }
}
