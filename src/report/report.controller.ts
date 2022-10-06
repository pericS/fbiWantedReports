import { Body, Controller, Post } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportDto } from './dto/report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportsService: ReportService) {}
  @Post()
  async witnessReport(@Body() reportDto: ReportDto) {
    return this.reportsService.witnessReport(reportDto);
  }
}
