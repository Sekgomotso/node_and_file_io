const Visitor = require('../src/main');

describe("function that saves visitors data", ()=>{
    beforeEach(()=>{
        let sekgomotso = new Visitor("sekgomotso shalang",30,"17/09/2020","00:00","Happy birthday","Tumi");
        sekgomotso = sekgomotso.save();
    });

    it("should return visitor's full name", ()=>{
        expect(sekgomotso.save()).toBe(this.full_name)
    })
})

describe("function that takes name and grabs vistor's data", ()=>{
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