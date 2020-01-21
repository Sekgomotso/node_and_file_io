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
        let mention = this.full_name.replace(' ','_').toLowerCase();

        fs.appendFile(`visitor_${mention}.json`, JSON.stringify(this.full_name), (err)=>{
            if (err) throw err;
            console.log('done');
        });
        return(this);
    }
}

async function load(full_name) {
    fs.readFile(`visitor_{full_name}.json`, "utf8", (err, data)=>{
        console.log(data);
    })
}

let sekgomotso = new Visitor("sekgomotso shalang",30,"17/09/2020","00:00","happy birthday","Raymond");

sekgomotso.save();

module.exports = { 
    Visitor
}
