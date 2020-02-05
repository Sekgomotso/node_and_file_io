let fs = require('fs');
const {Visitor} = require('../src/main');

let motso = {
    full_name: "sekgomotso shalang",
    age: 30,
    date: "17/09/2020",
    time: "00:00",
    comments: "Happy birthday",
    assistant: "Tumi"
}

let sekgomotso = new Visitor (
    motso.full_name,
    motso.age,
    motso.date,
    motso.time,
    motso.comments,
    motso.assistant
);

describe("function that saves visitors data", ()=>{

    it("should return visitor's age", ()=>{
        expect(sekgomotso.age).toBe(motso.age);
    })
});

describe("function that saves visitors data", ()=>{

    it("should return visitor's full name", ()=>{
        expect(sekgomotso.full_name).toBe(motso.full_name);
    })
});

describe("function that saves visitors data", ()=>{

    it("should return assistant's comment", ()=>{
        expect(sekgomotso.comments).toBe(motso.comments);
    })
});

describe("function that saves visitors data", ()=>{

    it("should return assistant's name", ()=>{
        expect(sekgomotso.assistant).toBe(motso.assistant);
    })
});