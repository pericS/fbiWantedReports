import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReportDto } from './dto/report.dto';
import parsePhoneNumber from 'libphonenumber-js';
import { findWantedPerson, saveReport } from './report.helpers';

@Injectable()
export class ReportService {
  async witnessReport(reportDto: ReportDto) {
    const wantedPerson = await findWantedPerson(reportDto.suspectName);
    if (!wantedPerson) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Could not find suspect named: ${reportDto.suspectName}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const parsedPhoneNumber = parsePhoneNumber(reportDto.phoneNumber);
    const countryCode = parsedPhoneNumber.country;

    await saveReport(countryCode, reportDto.phoneNumber, reportDto.suspectName);

    return wantedPerson;
  }
}
