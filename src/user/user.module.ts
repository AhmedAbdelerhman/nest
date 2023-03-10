import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
   imports:[TypeOrmModule.forFeature([UserEntity])], 
  controllers: [UserController],
  providers:[UserService]
})
export class UserModule {}
