import {
  FbiWantedList,
  WantedPersonData,
} from './interfaces/WantedList.interface';
import * as fs from 'fs';

export const findWantedPerson = async (
  name: string,
): Promise<WantedPersonData | undefined> => {
  const fbiWantedList: FbiWantedList = await (
    await fetch('https://api.fbi.gov/wanted/v1/list')
  ).json();

  return fbiWantedList.items.find(
    (itm) => itm.title.toLowerCase() === name.toLowerCase(),
  );
};

export const saveReport = async (
  countryCode: string,
  phoneNumber: string,
  nameOfSuspect: string,
): Promise<void> => {
  const report = `Phone number of witness: ${phoneNumber} \nCountry Code of Witness: ${countryCode} \nName of Suspect: ${nameOfSuspect} \nDate&Time of Report: ${new Date()}\n\n`;
  await fs.promises.appendFile('reports.txt', report, { encoding: 'utf8' });
};
