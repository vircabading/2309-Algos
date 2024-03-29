///////////////////////////////
// Main Application

const getNumPosNegZero = (numArray) => {
    // console.log("\n*** open getNumPosNegZero() ******\n");
    // console.log({numArray});

    let numPos = 0;
    let numNeg = 0;
    let numZero = 0;
    let totalNum = numArray.length;

    for (let x=0; x<numArray.length; x++) {
        let curNum = numArray[x];
        // console.log(`${x}: ${curNum}`);
        if (curNum > 0) {
            numPos++;
        } else if (curNum < 0) {
            numNeg++;
        } else {
            numZero++;
        }
        // console.log(`Current Number: ${curNum} | Number of Positives: ${numPos} | Negatives: ${numNeg} | Zeroes: ${numZero}`);
    }
    // console.log(`total number of numbers: ${totalNum}`);
    const posRatio = numPos / totalNum;
    const negRatio = numNeg / totalNum;
    const zeroRatio = numZero / totalNum;
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

console.log("//////////////////////////////");
console.log("//  Plus Minus Algorithm\n");

const A1 = [1, 1, 0, -1, -1];
getNumPosNegZero(A1);