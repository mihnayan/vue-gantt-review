export function getDate(hours) {
  const currenDate = new Date();
  const currentYear = currenDate.getFullYear();
  const currentMonth = currenDate.getMonth() + 1;
  const currentDay = currenDate.getDay();
  const timeStamp = new Date(`${currentYear}-${currentMonth}-${currentDay} 00:00:00`).getTime();
  return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
}