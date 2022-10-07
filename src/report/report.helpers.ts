import {
  FbiWantedList,
  WantedPersonData,
} from './interfaces/WantedList.interface';
import * as fs from 'fs';
import { HttpException, HttpStatus } from '@nestjs/common';

export const findWantedPerson = async (
  name: string,
): Promise<WantedPersonData | undefined> => {
  try {
    const fbiWantedList: FbiWantedList = await (
      await fetch('https://api.fbi.gov/wanted/v1/list')
    ).json();

    return fbiWantedList.items.find(
      (itm) => itm.title.toLowerCase() === name.toLowerCase(),
    );
  } catch (error) {
    console.log(error);
    throw new HttpException(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
};

export const saveReport = async (
  countryCode: string,
  phoneNumber: string,
  nameOfSuspect: string,
): Promise<void> => {
  const report = `Phone number of witness: ${phoneNumber} \nCountry Code of Witness: ${countryCode} \nName of Suspect: ${nameOfSuspect} \nDate&Time of Report: ${new Date()}\n\n`;
  try {
    await fs.promises.appendFile('reports.txt', report, { encoding: 'utf8' });
  } catch (error) {
    throw new HttpException(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
};
