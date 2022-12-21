const getMonth = (monthNumber: number) => {
  switch (monthNumber) {
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
    case 11:
      return "December";
      break;
    default:
      return "September";
      break;
  }
};
const getWeekDay = (dayNumber: number) => {
  switch (dayNumber) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      return "Monday";
      break;
  }
};

export const useGetDate = () => {
  const now = new Date();
  const dayOfTheMonth = now.getDate();
  const year = now.getFullYear();
  const monthNumber = now.getMonth();
  const dayOfTheWeek = now.getDay();

  const day = getWeekDay(dayOfTheWeek);
  const month = getMonth(monthNumber);
  const date = `${day}, ${month} ${dayOfTheMonth}, ${year}`;

  return { date };
};
