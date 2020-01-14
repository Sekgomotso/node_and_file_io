let fs = require('fs');

class Visitor {
    constructor(full_name, Age, Date, Time,Comments, Assistant) {
        this.full_name = full_name;
        this.age = Age;
        this.dateOfVisit = Date;
        this.timeOfVisit = Time;
        this.comments = Comments;
        this.assistant = Assistant;
    }

    async save() {
        fs.appendFile('visitor_{motso}.json'), JSON.singify(this.full_name), function (err) {
            if (err) throw err;
            console.log('done')
        }
    }
}

async load(name) {
    const fs  = require('fs').promises
    let data = JSON.stringify(this)
    try {
        let query = await fs.writeFile{./Workspace$(this.full_name)}.json.data
    }
}
motso.save();
