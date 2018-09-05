const chai = require("chai");
const romansFunc = require("../index.js");
const romanToInt = romansFunc.romanToInt;
const intToRoman = romansFunc.intToRoman;
const expect = chai.expect;

describe("romanToInt()", () => {
  it("Deve retornar 1 para I", () => {
    expect(romanToInt('I')).to.equal(1);
  })
  it("Deve retornar 50 para L", () => {
    expect(romanToInt('L')).to.equal(50);
  })
})

describe("intToRoman()", () => {
  it("Deve retornar X para 10", () =>{
    expect(intToRoman(10)).to.equal('X');
  })
  it("Deve retornar M para 1000", () => {
    expect(intToRoman(1000)).to.equal('M');
  })
})
