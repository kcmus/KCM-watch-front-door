export default function formatDate(inputDate:string):string { 

    const [year,month,day] = inputDate.split('-').map(Number);


    //create a new Date object 
    const date = new Date(year,month - 1, day);

    //define an array of month names and weekdays 

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

    ];

    //get the formatted parts 

    const dayName = dayNames[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const formattedDate = `${dayName} ${monthName} ${day}, ${year}`;

    return formattedDate;
}