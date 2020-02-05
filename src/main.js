"use strict"

let fs = require('fs');

class Visitor {
    constructor(full_name, age, date, time, comments, assistant) {
        this.full_name = full_name;
        this.age = age;
        this.dateOfVisit = date;
        this.timeOfVisit = time;
        this.comments = comments;
        this.assistant = assistant;
    }

    async save() {
        let name = this.full_name.replace(' ','_').toLowerCase();

        fs.appendFile(`visitor_${name}.json`, JSON.stringify(this, null, 4), (err)=>{
            if (err) throw err;
            console.log('done');
        });
        return(this);
    }
}


async function load(full_name) {
    let name = full_name.replace(' ','_').toLowerCase();
    
    fs.readFile(`visitor_${name}.json`, 'utf8', (err, data)=>{
        if(err) throw err;
        console.log(data);
    });
}

let sekgomotso = new Visitor("sekgomotso shalang",30,"17/09/2020","00:00","Happy birthday","Tumi");

sekgomotso.save();
load("sekgomotso shalang");

module.exports = { 
    Visitor
}