export interface Person {
  first: string;
  last: string;
  age?: number;
}

export type BirthDate = {
  first: string;
  last: string;
  dob: Date;
};
