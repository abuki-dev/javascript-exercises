const greet=require(`./helloWorld`);
describe(`greeting test for my 1st project `,function(){
  test(`the out put must be "hellow there!"`,function(){
    expect(greet()).toEqual(`hellow there!`);
  });
});