/////////////////////////////////////////
//  MIN MAX SUM ALGORITHM
/////////////////////////////////////////

const miniMaxSum = (arr) => {
    console.log({arr});

    let totalSum = 0;
    let smallestInt = arr[0];
    let largestInt = arr[0];

    for (numb of arr) {
        console.log({numb});
        console.log(`total sum: ${totalSum} | smallest int: ${smallestInt} | largest int: ${largestInt}`);
    }
}

console.log("/////////////////////////////////");
console.log("// Min Max Sum Algorithm\n");

const a1 = [1,3,5,7,9];
console.log("\n*********************");
console.log(`Get Min Max Sum of ${a1}`);
miniMaxSum(a1);