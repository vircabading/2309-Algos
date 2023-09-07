/////////////////////////////////////////////////
//  TIME CONVERSION ALGORITHM
/////////////////////////////////////////////////



const timeConversion = (s) => {
    const convertHour = (hour,middayStat) => {
        if ((middayStat == "AM") && (hour == "12")) {
            return "00";
        } else if ((middayStat == "PM") && (hour != "12")) {
            let numHour = parseInt(hour);
            numHour += 12;
            if (numHour >= 10) {
                return numHour.toString();
            } else {
                return "0" + numHour.toString();
            }
        }
        return hour;
    }
    
    const middayStat = s.substring(8,10);       // Find out if time is AM or PM?
    const hour = s.substring(0,2);
    const minuteAndSeconds = s.substring(2,8);
    const newHour = convertHour(hour, middayStat);
    return newHour + minuteAndSeconds;
}

console.log("///////////////////////////////////////");
console.log("// Time Conversion Algorithm\n");

const time1 = "12:01:00PM"
console.log("\n*********************");
console.log(`Time Conversion of ${time1}`);
console.log(timeConversion(time1));

const time2 = "12:01:00AM"
console.log("\n*********************");
console.log(`Time Conversion of ${time2}`);
console.log(timeConversion(time2));

const time3 = "07:05:45PM"
console.log("\n*********************");
console.log(`Time Conversion of ${time3}`);
console.log(timeConversion(time3));

