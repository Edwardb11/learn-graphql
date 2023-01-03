import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
