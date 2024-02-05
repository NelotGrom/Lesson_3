const calculateBonus = require('./scope-task.js')

test('Smoke test - regular 50 bonus', ()=>{
    expect(calculateBonus(50,1)).toBe(50);
})

test('Calculating bonus for small numbers', ()=>{
    expect(calculateBonus(1,2)).toBe(3);
})

test('Calculating bonus for big numbers', ()=>{
    expect(calculateBonus(10000000,999999)).toBe(50);
})

test('Calculating bonus for zero numbers', ()=>{
    expect(calculateBonus(0,0)).toBe(0);
})

test('Calculating bonus for negative numbers', ()=>{
    expect(calculateBonus(-1,-5)).toBe(-6);
})

test('Calculating bonus for edge meanings', ()=>{
    expect(calculateBonus(50,0)).toBe(50);
    expect(calculateBonus(0,50)).toBe(50);
})