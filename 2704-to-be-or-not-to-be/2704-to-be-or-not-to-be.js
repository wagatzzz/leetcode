/**
 * @param {string} val
 * @return {Object}
 */
function expect(n){
  return {
        toBe(val1){
        if(n === val1){
            return true;
        }
        else{
           throw new Error("Not Equal");
        }
    },
        
    notToBe(val2){
        if(n !== val2){
            return true;
        }
        else{
            throw new Error("Equal");
        }
    }
    }
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */