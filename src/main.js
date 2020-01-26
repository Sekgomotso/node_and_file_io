"use strict"

let fs = require('fs');

class Visitor {
    constructor(full_name, Age, Date, Time, Comments, Assistant) {
        this.full_name = full_name;
        this.age = Age;
        this.dateOfVisit = Date;
        this.timeOfVisit = Time;
        this.comments = Comments;
        this.assistant = Assistant;
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