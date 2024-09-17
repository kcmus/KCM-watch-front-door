export default function formatDate(inputDate:string|number):string { 

    const [year,month,day] = inputDate.split('-').map(Number);


    //Create a new Date object 
    const date = new Date(year,month - 1, day);

    //Define an array of month names and weekdays 

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

    ];

    //Get the formatted parts 
    const dayName = dayNames[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const formattedDate = `${dayName} ${monthName} ${day}, ${year}`;

    return formattedDate;
}


// export default function formatDate(utcTimestamp:number) {
//   // Create a Date object from the UTC timestamp (converted to milliseconds)
//   const date = new Date(utcTimestamp * 1000);

//   // Define arrays for day and month names
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//   // Extract day, date, month, and year in the user's local time zone
//   const dayOfWeek = daysOfWeek[date.getDay()];
//   const day = date.getDate();
//   const month = monthsOfYear[date.getMonth()];
//   const year = date.getFullYear();

//   // Return the formatted date string in local time zone
//   return `${dayOfWeek} ${month} ${day}, ${year}`;
//   }
  
