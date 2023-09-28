export type Case = {
  date: string;
  name: string;
  code: string;
  newCasesByPublishDate: number;
  cumCasesByPublishDate: number;
  newDeaths28DaysByPublishDate: number | null;
  cumDeaths28DaysByPublishDate: number | null;
}
