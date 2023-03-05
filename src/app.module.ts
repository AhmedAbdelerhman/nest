import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user/user.entity';
import { ReportModule } from './report/report.module';
import { ReportController } from './report/report.controller';
import { ReportEntity } from './report/report.entity';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: [UserEntity,ReportEntity],
    }),
    UserModule,
    ReportModule,
  ],
  controllers: [ReportController , UserController],
})
export class AppModule {}
