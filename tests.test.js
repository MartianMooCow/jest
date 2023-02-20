import {sum,capitalize,reverseString,calculator,ceasarCipher, analyzeArray} from './tests'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize first letter', () => {
  expect(capitalize("hi")).toBe("Hi")
})

test('reverse string', () => {
  expect(reverseString("hi")).toBe("ih")
})

test('calculator', () => {
  expect(calculator(10,"+",5)).toBe(15);
  expect(calculator(10,"-",5)).toBe(5);
  expect(calculator(10,"*",5)).toBe(50);
  expect(calculator(10,"/",5)).toBe(2);
})

test("ceasar cipher", () => {
  expect(ceasarCipher("Hi I'm from TOPz",90)).toBe("Tu U'y rday FABl")
})

test("analyze array", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual ({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})