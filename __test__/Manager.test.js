const Manager = require('../lib/Manager');
 
describe('manager', () => {
    const m = new Manager("muammar", 1000, "muammar@green.com", 5555555555);
    it("Should instantiate Employee object", () => {
        expect(typeof(m)).toBe("object");
    });

    it("Should return entered name",()=> {
        expect(m.getName()).toBe("muammar");
    });

    it("Should return entered id",()=> {
        expect(m.getId()).toBe(1000);
    });

    it("Should return entered email",()=> {
        expect(m.getEmail()).toBe("muammar@green.com");
    });

    it("Should return phone number", () => {
      expect(m.getNumber()).toBe(5555555555);
    });

    it("Should return entered role",()=> {
        expect(m.getRole()).toBe("Manager");
    });
});