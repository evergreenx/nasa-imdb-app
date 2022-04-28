// get current date and time based on user timezone

export const getUserFullDate = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return date;
};

 getUserFullDate;