// get current date and time based on user timezone

const getUserFullDate = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return date;
};

export default getUserFullDate;