//describe("demo", function (){
//    it("Este test debe pasar siempre", function (){
//        expect(4 + 2).toBe(6);
//    })
//})

//const Activity = require("../scripts/activity.js");
//const Repository = require("../scripts/repository.js");
//
//describe("Activity y Repository son clases", ()=>{
//    it("El constructor debe recibir parámetros", ()=>{
//        expect(Activity).toBeDefined(); //verificar que Activity esta definida
//        expect(Activity.prototype.constructor.length).toBeGreaterThan(3);
//    });
//
//    it("Repository debe ser una clase", ()=>{
//        expect(Repository).toBeDefined(); //verificar que Repository esta definida
//        expect(typeof Repository.prototype.constructor).toBe("function");
//    });
//
//    it("Debe existir un metodo getAllActivities()", ()=>{
//        const repo = new Repository();
//        expect(repo.getAllActivities).toBeDefined();
//    });
//
//    it("El metodo getAllActivities debe retornar un array", ()=>{
//        const repo = new Repository();
//        expect(Array.isArray(repo.getAllActivities())).toBeTrue();
//    });
//})

const {Activity, Repository} = require("../scripts/Modelo");

describe("Activity y Repository son clases", () => {
    it("El constructor de Activity debe recibir parámetros", () => {
        const activity = new Activity(1, "Title", "Description", "img.jpg");
        expect(activity.id).toBe(1);
        expect(activity.title).toBe("Title");
        expect(activity.description).toBe("Description");
        expect(activity.imgUrl).toBe("img.jpg");
    });

    it("Repository debe ser una clase", () => {
        expect(Repository).toBeDefined(); // Verificar que Repository está definida
        expect(typeof Repository.prototype.constructor).toBe("function");
    });

    it("Debe existir un método getAllActivities en Repository", () => {
        const repo = new Repository();
        expect(repo.getAllActivities).toBeDefined();
        expect(typeof repo.getAllActivities).toBe("function");
    });

    it("El método getAllActivities de Repository debe retornar un array", () => {
        const repo = new Repository();
        const activities = repo.getAllActivities();
        expect(Array.isArray(activities)).toBeTrue();
    });
});