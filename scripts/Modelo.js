class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.nextId = 1;
    }

    getAllActivities(){
        return this.activities;
    }

    createActivity(title, description, imgUrl){
        const newActivity = new Activity(this.nextId,title, description, imgUrl);
        this.activities.push(newActivity);
        this.nextId++;
    }

    deleteActivityById(id){
        const index = this.activities.findIndex(activity =>activity.id === id);
        if (index !== -1){
            this.activities.splice(index, 1);
        }
    }
}   

module.exports = {Activity, Repository};