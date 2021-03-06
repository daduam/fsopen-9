/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender, NewPatientEntry } from '../types';
import { isString, isDate, isGender } from './typeGuards';

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error("incorrect or missing name");
  }

  return name;
};

const parseDateOfBirth = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("malformatted or missing date");
  }

  return date;
};

const parseSsn = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("incorrect or missing ssn");
  }

  return ssn;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("incorrect or missing occupation");
  }

  return occupation;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("incorrect or missing gender");
  }

  return gender;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toNewPatientEntry = (object: any): NewPatientEntry => {
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  const newEntry: NewPatientEntry = {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    occupation: parseOccupation(object.occupation),
    gender: parseGender(object.gender),
    entries: []
  };

  return newEntry;
};

export default toNewPatientEntry;