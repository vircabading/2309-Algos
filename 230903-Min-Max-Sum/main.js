/////////////////////////////////////////
//  MIN MAX SUM ALGORITHM
/////////////////////////////////////////

const miniMaxSum = (arr) => {
    // Initializa Variables
    let totalSum = 0;
    let smallestInt = arr[0];
    let largestInt = arr[0];

    // Iterate through array
    // Find the smalles and largest number along with the sum of all the numbers
    for (let numb of arr) {
        if (numb < smallestInt) {
            smallestInt = numb;
        } else if (numb > largestInt) {
            largestInt = numb;
        }
        totalSum += numb;
    }

    // Calculate minimum and maximum sums
    const minSum = totalSum - largestInt;
    const maxSum = totalSum - smallestInt;

    // Output findings
    console.log(`${minSum} ${maxSum}`)
}

console.log("/////////////////////////////////");
console.log("// Min Max Sum Algorithm\n");

const a1 = [1,3,5,7,9];
console.log("\n*********************");
console.log(`Get Min Max Sum of ${a1}`);
miniMaxSum(a1);

const a2 = [5,3,1,9,7];
console.log("\n*********************");
console.log(`Get Min Max Sum of ${a2}`);
miniMaxSum(a2);