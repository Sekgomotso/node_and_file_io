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
        fs.appendFile('visitor_{their_full_name}.json', JSON.stringify(this.fullName), (err)=>{
            if (err) throw err;
            console.log('done');
        });
    }
}

let motso = new Visitor("motso",30,"17/09/2020","00:00am","happy_birthday", "raymond");

motso.save();
