/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   function word1ToArrayUsingForLoop(s) {
  const charArray1 = [];
  for (let i = 0; i < s.length; i++) {
      if(s[i] === "#"){
          charArray1.pop();
      }else{
          charArray1.push(s[i]);
          }
    
  }
  return charArray1.join('');
} 
function word2ToArrayUsingForLoop(t) {
  const charArray2 = [];
  for (let i = 0; i < t.length; i++) {
      if(t[i] === "#"){
          charArray2.pop();
      }else{
          charArray2.push(t[i]);
          }
    
  }
  return charArray2.join('');
} 

const processedS = word1ToArrayUsingForLoop(s);
const processedT = word2ToArrayUsingForLoop(t);

  
return processedS === processedT;
    
};