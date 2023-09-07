/////////////////////////////////////////////////
//  TIME CONVERSION ALGORITHM
/////////////////////////////////////////////////

const timeConversion = (s) => {
    console.log({s});
    const middayStat = s.substring(8,10);
    console.log({middayStat});
}

console.log("///////////////////////////////////////");
console.log("// Time Conversion Algorithm\n");

const time1 = "12:01:00PM"
console.log("\n*********************");
console.log(`Time Conversion of ${time1}`);
timeConversion(time1);

const time2 = "12:01:00AM"
console.log("\n*********************");
console.log(`Time Conversion of ${time2}`);
timeConversion(time2);

const time3 = "07:05:45PM"
console.log("\n*********************");
console.log(`Time Conversion of ${time3}`);
timeConversion(time3);

