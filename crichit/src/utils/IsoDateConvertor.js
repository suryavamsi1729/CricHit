export default function IsoDateConvertor(isoDateString){
    const date = new Date(isoDateString);
    let hours = date.getHours(); // Get hours (0-23)
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes (0-59)
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM
    hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const month_arry = ["JAN","FEB","MAR","APL","MAY","JUN","JLY","AGU","SEP","OCT","NOV","DEC"]
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const obj ={
        date:{
            week:week[date.getDay()],
            year:year,
            month:month_arry[month-1],
            day:day
        },
        time:{
            hrs:hours,
            min:minutes,
            ampm:ampm
        }
    }
    return obj;
}