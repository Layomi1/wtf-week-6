let maxNum= 100;
let minNum= 1;
// let predictedNum= parseInt

 function guessNumber(predictedNum){
    let randomNumber= Math.floor((Math.random()) * (maxNum - minNum + 1)) + minNum;

    if(randomNumber < predictedNum){
        return "too high";
    }
    else if(randomNumber == predictedNum) {
        return "correct";
    }
    else{
        return "too low";
    }
 }
 guessNumber(45);
