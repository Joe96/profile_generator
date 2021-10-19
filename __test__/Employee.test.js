const Employee = require('../lib/Employee');
 
describe('employee', () => {
    const employee = new Employee("Joel" , 0001, "joel@afamefune.com");
    it("Should instantiate Employee object", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Should return entered name",()=> {
        expect(e.getName()).toBe("Joel");
    });

    it("Should return entered id",()=> {
        expect(e.getId()).toBe(0001);
    });

    it("Should return entered email",()=> {
        expect(e.getEmail()).toBe("joel@afamefune.com");
    });

    it("Should return entered role",()=> {
        expect(e.getRole()).toBe("Employee");
    });

});