let fs = require('fs');
const {Visitor} = require('../src/main');

let motso = {
    full_name: "sekgomotso shalang",
    Age: 30,
    Date: "17/09/2020",
    Time: "00:00",
    Comments: "Happy birthday",
    Assistant: "Tumi"
}

let sekgomotso = new Visitor (
    motso.full_name,
    motso.Age,
    motso.Date,
    motso.Time,
    motso.Comments,
    motso.Assistant
);

describe("function that saves visitors data", ()=>{

    it("should return visitor's full name", ()=>{
        expect(sekgomotso.full_name).toBe(motso.full_name);
    })
});

describe("function that takes name and grabs visitor's data", ()=>{
    let sekgomotso;

    beforeEach(()=>{
        let name = motso.full_name.replace(' ','_').toLowerCase();

        let load = fs.readFile(`visitor_${name}.json`, 'utf8', (err, data)=>{
            if(err) throw err;
            console.log(data);
        });
    
        sekgomotsoLoad = JSON.parse(load("Sekgomotso shalang"))
    });
    it("should return age", ()=>{
        expect(sekgomotso.Age).toBe(sekgomotsoLoad.Age);
    })
})