// current date and time based on user timezone

export const getUserFullDate = () => {
  const date = new Date();
  const day = date.getUTCDate();
  const dayofWeek = date.getDay();

  const year = date.getFullYear();

  const dayString = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const shortMonth = date.toLocaleString("en-us", {
    month: "lonf",
  });
  const dateString = `${dayString[dayofWeek]} , ${day} ${shortMonth} ${year}`;

  return dateString;
};
