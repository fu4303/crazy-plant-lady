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

const getCurrentDate = (current = Date.now()) => {
  const now = new Date(current);

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

/**
 * convert firebase date to a more readable date :)
 */
const formatFirebaseDate = (date) => {
  const dateToUnixStamp = Date.parse(date);
  return getCurrentDate(dateToUnixStamp);
};

/**
 * formats "YYYYMMDD" date string to Date
 */
const dateStringToDate = (dateString) => {
  return new Date(
    dateString.substring(0, 4),
    dateString.substring(4, 6) - 1,
    dateString.substring(6, 8)
  );
};

export {
  getCurrentDate,
  getDateTextFormat,
  formatFirebaseDate,
  dateStringToDate,
};
