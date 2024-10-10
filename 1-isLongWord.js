/* eslint-disable */
// do not touch the line above

function isLongWord(word) {

  const regex = /^[A-Z]{5, }$/gi
  
  if (word === regex){
    return true;
  }
  else {
    return false;
  }
}

// do not touch below this line
export default isLongWord;
