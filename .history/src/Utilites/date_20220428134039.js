// get current date and time

const getFullDate = () => {
    let date = new Date();
  let today = date.getDate();
  let date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    

    return date;
};

