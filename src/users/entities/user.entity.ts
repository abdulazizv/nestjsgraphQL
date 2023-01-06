import {UpdateDateColumn,PrimaryColumn, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm'
import { Field, ID,ObjectType} from '@nestjs/graphql'

@ObjectType()
@Entity('users')
export class UserEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field({nullable:true})
    @Column({nullable:true})
    name:string;

    @Field()
    @Column()
    email:string;

    @Field()
    @CreateDateColumn()
    createdAt:Date

    @Field()
    @UpdateDateColumn()
    updatedAt:Date
}
