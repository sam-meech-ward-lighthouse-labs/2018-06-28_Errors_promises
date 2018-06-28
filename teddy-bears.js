const db = require('./db');

db.save({name: "paddington", hat: true})
.then((data) => {
    console.log(`saved ${data.name}`);
    return db.save(null);
})
.catch((erro) => {
    console.log("error at the top");
})
.then((data) => {
    // console.log(`saved ${data.name}`);
    return db.save({name: "Weeeniee the pooh"});
})
.then((data) => {
    console.log(`saved ${data.name}`);
    return db.save({name: "Yogi bear"});
})
.then((data) => {
    console.log(`saved ${data.name}`);
    return "^^";
})
.then((data) => {
    console.log("3", data);
}).catch((error) => {
    console.log("Handle allll the errors");
});

// db.save(null)
// .then((data) => {
//     console.log("yay!!!");
// }).catch((error) => {
//     console.log("AHHHHHHHH ERRORROROROROROR LOL");
// }).then(() => {
// }).catch(() => {
// }).then(() => {
// });

const promises = [
db.save({name: "paddington", hat: true}),
db.save({name: "Weeeniee the pooh"}),
db.save({name: "Yogi bear"})
];

Promise.all(promises)
.then((data) => {
    console.log(`saved ${data[0].name}`);
    console.log(`saved ${data[1].name}`);
    console.log(`saved ${data[2].name}`);
})
.catch((error) => {
    console.log("AHHHHHHHHHHHH", error);
});