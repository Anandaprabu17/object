//phones

var phone = {
    name: "Iphone",
    model: "14 pro max",
    software: "ios",
    color: "white",
    price: 167999,
    tax: 10000,
    warranty: 1,
    ram: 24,
    rom: 254,
    sum() {
        let amount = phone.price + phone.tax;
        return amount;
    }
}
document.write(phone.name + " " + phone.model, "<br>");
document.write(`Price : ${phone.sum()} (Inclusive of all taxes)`, "<br>");

//object materials
document.write(`Keys of Phone is ${Object.keys(phone)}`, "<br>");
document.write(`Values of Phone is ${Object.values(phone)}`, "<br>");
document.write(`Entries of Phone is ${Object.entries(phone)}`, "<br>", "<br>", "<br>", "<br>");


// headset

var headset = {
    name: "Oneplus",
    model: "Bullet wireless z",
    connectivity: "Bluetooth",
    price: 1700,
    tax: 299,
    quantity: 1,
    color: "blue",
    warranty: 1,
    totalprice() {
        let amount = headset.price + headset.tax;
        return amount;
    }
}
document.write(headset.name + " " + headset.model, "<br>");
document.write(`Price : ${headset.totalprice()} (Inclusive of all taxes)`, "<br>");

//object materials
document.write(`Keys of headset is ${Object.keys(headset)}`, "<br>");
document.write(`Values of headset is ${Object.values(headset)}`, "<br>");
document.write(`Entries of headset is ${Object.entries(headset)}`, "<br>", "<br>", "<br>", "<br>");

//tv

var television = {
    name: "Sony",
    model: "LED Smart Google Tv",
    operatingSystem: "Google Tv",
    color: "black",
    warranty: 1,
    resolution: 3820,
    soundOutput: 20,
    refreshRate: 60,
    price: 54900,
    tax: 3000,
    totalprice() {
        let amount = television.price + television.tax;
        return amount;
    }

}
document.write(television.name + " " + television.model, "<br>");
document.write(`Price : ${television.totalprice()}(Inclusive of all taxes)`, "<br>");

//object materials
document.write(`Keys of television is ${Object.keys(television)}`, "<br>");
document.write(`Values of television is ${Object.values(television)}`, "<br>");
document.write(`Entries of television is ${Object.entries(television)}`, "<br>", "<br>", "<br>");


//Cycle

var cycle = {
    name: "Storm HT",
    brand: "Hercules",
    gear: "single speed",
    tyreSize: 26,
    frameSize: 17,
    gearType: "non geared",
    suspension: "rigid",
    price: 5419,
    tax: 500,
    sum() {
        let amount = cycle.price + cycle.tax;
        return amount;
    }
}
document.write(cycle.brand + " " + cycle.name, "<br>");
document.write(`Price : ${cycle.sum()}(Inclusive of all taxes)`, "<br>");

//object materials
document.write(`Keys of cycle is ${Object.keys(cycle)}`, "<br>");
document.write(`Values of cycle is ${Object.values(cycle)}`, "<br>");
document.write(`Entries of cycle is ${Object.entries(cycle)}`, "<br>", "<br>", "<br>", "<br>");

//student marklist

var mark = {
    name: "murugan",
    qualification: 12,
    group: "Maths Biology",
    section: "AB",
    tamil: 95,
    english: 70,
    maths: 65,
    physics: 80,
    chemistry: 78,
    biology: 89,
    sum() {
        let total = mark.tamil + mark.english + mark.maths + mark.physics + mark.chemistry + mark.biology;
        return total;
    },
    value() {
        average = mark.sum() / 600;
        percentage = average * 100;
        return percentage;
    }

}
document.write(`Student name : ${mark.name}`, "<br>");
document.write(`Total marks : ${mark.sum()}`, "<br>");
document.write(`Marks in Percentage : ${mark.value()}`, "<br>");

//object materials
document.write(`Keys of cycle is ${Object.keys(mark)}`, "<br>");
document.write(`Values of cycle is ${Object.values(mark)}`, "<br>");
document.write(`Entries of cycle is ${Object.entries(mark)}`, "<br>", "<br>", "<br>", "<br>");