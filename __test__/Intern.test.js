const Intern = require('../lib/Intern');
 
describe('intern', () => {
    const i = new Intern("Malcolm", 4000, "malcolm@little.com","Mason High School");
    it("Should instantiate Employee object", () => {
        expect(typeof(i)).toBe("object");
    });

    it("Should return entered name",()=> {
        expect(i.getName()).toBe("Malcolm");
    });

    it("Should return entered id",()=> {
        expect(i.getId()).toBe(4000);
    });

    it("Should return entered email",()=> {
        expect(i.getEmail()).toBe("malcolm@little.com");
    });

    it("Should return intern's school", () => {
      expect(i.getSchool()).toBe("Mason High School");
    });

    it("Should return entered role",()=> {
        expect(i.getRole()).toBe("Intern");
    });
});