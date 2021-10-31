const Employee = require('../lib/Employee');
 
describe('employee', () => {
    const e = new Employee("Joel" , 3000, "joel@afamefune.com");
    it("Should instantiate Employee object", () => {
        expect(typeof(e)).toBe("object");
    });

    it("Should return entered name",()=> {
        expect(e.getName()).toBe("Joel");
    });

    it("Should return entered id",()=> {
        expect(e.getId()).toBe(3000);
    });

    it("Should return entered email",()=> {
        expect(e.getEmail()).toBe("joel@afamefune.com");
    });

    it("Should return entered role",()=> {
        expect(e.getRole()).toBe("Employee");
    });

});