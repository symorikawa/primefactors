/* globals primeFactors */

describe("Prime Factors", function() {

  it("should return a list of numbers when passed 100", function() {
    expect(primeFactors(100)).toEqual([2,5]);
  });

  it("should throw an exception if given parameter is not a number", function() {
    expect(function() {
      primeFactors("hello");
    }).toThrowError("Parameter is not a number");
  });
  it("should throw an exception if given parameter is too small", function() {
    expect(function() {
      primeFactors(1);
    }).toThrowError("Given number is too small (empty list)");
  });
});
