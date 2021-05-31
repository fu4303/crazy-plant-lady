const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getCurrentDate = () => {
  const timeElapsed = Date.now();
  const now = new Date(timeElapsed);

  const monthIndex = now.getMonth();
  const year = now.getFullYear();
  const date = now.getDate();
  const monthName = months[monthIndex];
  const dayName = days[now.getDay()];
  return `${dayName}, ${monthName} ${date} ${year}`;
};

/**
 * returns YYYYMMDD in string format
 * makes retrieving plant details from firestore wayyyyy easier
 * @param {*} date
 */
const getDateTextFormat = (date) => {
  const day = `${date.getDate()}`;
  const month = `${date.getMonth() + 1}`;
  const year = `${date.getFullYear()}`;
  return year + month.padStart(2, 0) + day.padStart(2, 0);
};

export { getCurrentDate, getDateTextFormat };
