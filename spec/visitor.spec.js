const Visitor = require('../src/main');

describe("function that saves visitors data", ()=>{
    beforeEach(()=>{
        const name = {
        full_name: "sekgomotso shalang",
        Age: 30,
        Date: "17/09/2020",
        Time: "00:00am",
        Comments: "Happy birthday",
        Assistant: "Raymond"
}
    let sekgomotso = new Visitor(
        name.full_name,
        name.Age,
        name.Date,
        name.Time,
        name.Comments,
        name.Assistant
    );

    it("should return visitor's full name", ()=>{
        expect(sekgomotso.save()).toBe(name.full_name)
    })
    })
})