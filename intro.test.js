const { expect } = require('@jest/globals');
const {sumLastDigits} = require('./intro')
const {allLessNumber} = require('./intro')

describe("Task 2", () => {
    test('Task 2 | All smaller n Mersenne numbers', () =>{
        expect(allLessNumber).toBeDefined()
        expect(allLessNumber(3)).toEqual("Numbers that are less than the number n: 1")
        expect(allLessNumber(-2)).toBe("Error n is null or less")
        expect(allLessNumber(0)).toBe("Error n is null or less")
        expect(allLessNumber("Hello world")).toBe("n is a string")
        expect(allLessNumber()).toBeFalsy()
      })    
});


describe("Task 1", () => {
    test('Task 1 | The sum m of the last numbers of the number n', () =>{
        expect(sumLastDigits).toBeDefined()
        expect(sumLastDigits(12,2)).toBe(3) 
        expect(sumLastDigits(81,2)).toBeGreaterThan(0)
        expect(sumLastDigits(-12,2)).toBe("Error n or m is less than null")
        expect(sumLastDigits(12,-2)).toBe("Error n or m is less than null")
        expect(sumLastDigits(0)).toBeGreaterThanOrEqual(0)
        expect(sumLastDigits("Hello world")).toBe("Error n or m is string")
        expect(sumLastDigits()).toBeFalsy()
      })
})