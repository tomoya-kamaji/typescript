"use strict";
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfomation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges:" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date:" + emp.startDate);
    }
}
printEmployeeInfomation({ name: "Menu", startDate: new Date() });
class Car {
    drive() {
        console.log("運転中,,,");
    }
}
class Truck {
    drive() {
        console.log("トラック運転中,,,");
    }
    loadCargo(amount) {
        console.log("荷物を載せています..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function userVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
userVehicle(v1);
userVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("移動速度：" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
//# sourceMappingURL=app.js.map