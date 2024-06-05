/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n){
    let x = n;
    
    return function counter(){
        return x++;
    }
}
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */