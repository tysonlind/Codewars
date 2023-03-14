let time = "12:31:45PM";

function timeConversion(s) {
    // Write your code here
    let dayNight = s.slice(-2);
    console.log(dayNight);
    let hour = s.slice(0,2);
    let adjustedTime = '00';
    let timeBody = s.slice(2,8);
    //edge cases for AM/PM
    if (dayNight == "AM" && hour == 12){
        adjustedTime = Number(hour) - 12;
        adjustedTime = adjustedTime + "0";
    } else if (dayNight == "PM" && hour < 12){
        adjustedTime = Number(hour) + 12;
    } else {
        adjustedTime = hour;
    }
    return adjustedTime + timeBody;
}


console.log(timeConversion(time));