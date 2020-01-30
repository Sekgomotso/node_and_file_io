const {Visitor} = require('../src/main');

describe("function that saves visitors data", ()=>{
    let sekgomotso;
    let sekgomotsoLoad;
    beforeEach(()=>{
        let sekgomotso = new Visitor("sekgomotso shalang",30,"17/09/2020","00:00","Happy birthday","Tumi");
        sekgomotso = sekgomotso;

        let fs = require('fs');

        let full_name = sekgomotso.full_name;

        let name = full_name.replace(' ','_').toLowerCase();

        let load = fs.readFile(`visitor_${name}.json`, 'utf8', (err, data)=>{
            if(err) throw err;
            console.log(data);
        });

        sekgomotsoLoad = JSON.parse(load("sekgomotso shalang"))
    });

    it("should return visitor's full name", ()=>{
        expect(sekgomotso).toBe(sekgomotsoLoad);
    })
})

describe("function that takes name and grabs visitor's data", ()=>{
    let sekgomotso;

    beforeEach(()=>{
        let name = full_name.replace(' ','_').toLowerCase();

        let load = fs.readFile(`visitor_${name}.json`, 'utf8', (err, data)=>{
            if(err) throw err;
            console.log(data);
        });
        sekgomotsoLoad = JSON.parse(load("sekgomotso shalang"))
    });
    it("should return age", ()=>{
        expect(sekgomotso.Age).toBe(sekgomotsoLoad.Age);
    })
})