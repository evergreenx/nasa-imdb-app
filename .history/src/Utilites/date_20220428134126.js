// get current date and time

const getFullDate = () => {

  let today = new Date();
  let date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    

    return date;
};

