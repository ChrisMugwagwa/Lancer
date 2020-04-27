const sum = require('./sum');

test('correct addition', ()=>{
    expect(sum(1,2)).toBe(3);
});