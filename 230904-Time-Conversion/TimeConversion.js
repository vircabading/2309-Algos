/////////////////////////////////////////////////
//  TIME CONVERSION ALGORITHM
/////////////////////////////////////////////////

const convertHour = (hour,middayStat) => {
    return hour;
}

const timeConversion = (s) => {
    console.log({s});

    // Parse the parts of the time
    const middayStat = s.substring(8,10);       // Find out if time is AM or PM?
    const hour = s.substring(0,2);
    const minuteAndSeconds = s.substring(2,8);
    console.log({middayStat});
    console.log({hour});
    console.log({minuteAndSeconds});
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

