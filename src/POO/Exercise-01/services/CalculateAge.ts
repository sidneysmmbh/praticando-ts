export function calculateAge(data: string): number {
  const dataOfBirth: string[] = data.split('/');
  const day = +dataOfBirth[0];
  const month = +dataOfBirth[1];
  const year = +dataOfBirth[2];

  const d = new Date();
  const currentYear = d.getFullYear();
  const currentMonth = d.getMonth() + 1;
  const currentDay = d.getDate();

  let years = currentYear - year;

  if (currentMonth < month || (currentMonth == month && currentDay < day)) {
    years--;
  }

  return years < 0 ? 0 : years;
}
