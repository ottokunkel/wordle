
//binary search to check list for existance of a word
export const binarySearch = (arr, x, start, end) => {
    if (start > end) {
      return false;
    }
    let mid = Math.floor((start + end) / 2);
    const midVal = arr[mid].toLowerCase(); 
    const xLower = x.toLowerCase();        
  
    if (midVal === xLower) {
      return true;
    } else {
      if (midVal > xLower) {
        return binarySearch(arr, x, start, mid - 1);
      } else {
        return binarySearch(arr, x, mid + 1, end);
      }
    }
  }

export const getStatuses = (guessArr, answer) => {
    var answerCopy = answer;
    var statusArr = [];

    for(let i = 0; i < guessArr.length; i++){
        var guessLtr = guessArr[i].toLowerCase();

        if(answer.charAt(i) == guessLtr){
            statusArr.push('correct');
            answerCopy =  answerCopy.replace(guessLtr, '');

        }else if(answerCopy.includes(guessLtr)){
            statusArr.push('contains');
            answerCopy =  answerCopy.replace(guessLtr, '');
        }else{
            statusArr.push('absent');

        }
    }

    return statusArr;
}

