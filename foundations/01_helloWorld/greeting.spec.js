const usergreet=require(`./greeting`);
 
describe(`user welcomming `,function(){
    test(`welcome message shoud be appear`,function(){
        expect(usergreet("user")).toEqual(`welcome user, log in and start your journey!`)
    });
});