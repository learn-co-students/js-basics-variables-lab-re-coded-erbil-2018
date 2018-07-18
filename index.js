// Code your solution in this file!
let companyName = 'Scuber';
console.log(companyName)

expect(function () { companyName = 'specialCompany' }).to.throw(TypeError);
