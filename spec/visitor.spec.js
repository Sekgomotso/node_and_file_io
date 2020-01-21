// const {Visitor} = require('../src/main.js');

const Visitor = {
    "full_name": "sekgomotso shalang",
    "Age": 30,
    "Date": "17/09/2020",
    "Time": "00:00am",
    "Comments": "Happy birthday",
    "Assistance": "Raymond"
}

describe("fuction that saves visitors data", ()=>{
    let sekgomotso = new Visitor();

    it("should return visitor's full name", ()=>{
        expect(sekgomotso.save()).toEqual(visitor_sekgomotso_shalang.json)
    })
})
