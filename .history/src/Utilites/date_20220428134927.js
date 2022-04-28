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
    month: "long",
  });
  const dateString = `${dayString[dayofWeek]} ,  ${shortMonth} ${year}`;

  return dateString;
};
