// get current date and time



const getFullDate = () => {

    let today = date.getDate();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    
}