/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init){
    let x = init;
    return {
        increment(){
          x = x + 1;
            return x;
        },
        decrement(){
            x = x - 1;
            return x;
        },
        reset(){
            x = init;
            return x;
        }
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */