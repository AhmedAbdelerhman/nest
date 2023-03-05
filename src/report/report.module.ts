import { ReportEntity } from './report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';

@Module({
  imports:[TypeOrmModule.forFeature([ReportEntity])],
  providers: [ReportService],
  controllers:[ReportController]
})
export class ReportModule {}
