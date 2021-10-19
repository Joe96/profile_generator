const Engineer = require('../lib/Engineer');
 
describe('engineer', () => {
    const e = new Engineer("Huey" , 0002, "huey@newton.com","huey42");
    it("Should instantiate Employee object", () => {
        expect(typeof(e)).toBe("object");
    });

    it("Should return entered name",()=> {
        expect(e.getName()).toBe("Huey");
    });

    it("Should return entered id",()=> {
        expect(e.getId()).toBe(0002);
    });

    it("Should return entered email",()=> {
        expect(e.getEmail()).toBe("huey@newton.com");
    });

    it("Should return github username", () => {
      expect(e.getGithub()).toBe("huey42");
    });

    it("Should return entered role",()=> {
        expect(e.getRole()).toBe("Engineer");
    }); 
});