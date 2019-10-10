module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let correct = true;
  for (let i = 0; i < str.length && correct; i++) {
    let br = str[i];
    let found = false;
    if (stack.length > 0) {
      let op = stack[stack.length-1];
      found = bracketsConfig.find(a=>a[0]==op && a[1]==br);      
    }
    if (found) {
      stack.pop();
    } else {
      found = bracketsConfig.find(a=>a[0]==br);
      if (found) {
        stack.push(br);
      } else {
        correct = false;
      }
    }
  }  
  return correct &= stack.length == 0;
}
