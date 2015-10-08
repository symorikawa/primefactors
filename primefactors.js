/**
 * functions to find the prime factors of a given number
 * Created by symor on 10/8/2015.
 */
/* exported primeFactors */
/**
 * prints a list of prime numbers that are factors of the given number
 * @param num Number to find the factors of
 */
function primeFactors(num){
  if(isNaN(num)){
    throw new Error("Parameter is not a number");
  }
  if(num<4){
    throw new Error("Given number is too small (empty list)");
  }
  var list = [];
  for(var i=2; i<=(num+1)/2 ;i++){
    if(isPrime(i) && num%i===0){
      list.push(i);
    }
  }
  return list;
}

/**
 * helper function to determine if a given number is prime
 * @param prime The number to test
 * @returns {boolean} true if prime
 */
function isPrime(prime){
  for(var x=2; x<=(prime+1)/2 ;x++){
    if(prime%x===0){
      return false;
    }
  }
  return true;
}