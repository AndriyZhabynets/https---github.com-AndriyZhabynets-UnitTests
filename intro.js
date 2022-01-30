//Task 2
const allLessNumber = (n) =>{
    if (n > 0) {
    let array = []
    let arrayWithLessN = []
    
    for (let m = 1; m < 1000; m++) {
      let math = (2**m)-1
      let total = array.push(math)
    }
    
    let cache
    let ln = array.length
    for (let i = 0; i < ln; i++) {
      cache = array[i];
        if (cache < n){
        let final = arrayWithLessN.push(cache)
            }
    }
    
    return `Numbers that are less than the number n: ${arrayWithLessN}`
      } else if (typeof(n) == 'string'){
        return 'n is a string'
      } else if (n <= 0){
        return "Error n is null or less"
      } 
    
    }

//Task 1
const sumLastDigits = (n, m) => {
    try{  
        if(typeof(n || m) == 'string'){
          return "Error n or m is string"
        } else if (n < 0){
          return "Error n or m is less than null"
        } else if(m < 0){
          return "Error n or m is less than null"
        }
    const str = n.toString()
    const last = str.slice(str.length - m)
    return Array.from(last).reduce((previousValue, currentValue) => previousValue + Number(currentValue), 0)
    } catch(err){
      return undefined
    }
  }


  
  console.log(sumLastDigits(123, 3))

module.exports = {sumLastDigits, allLessNumber}