
function heard(kittens, callback) {
    console.log("2 Hearding.....");
    setTimeout(() => {
        if (kittens.length === 0) {
            callback(new Error("need kittens to heard"));
            return;
        }
        console.log("3 completed the heard");
        callback(null, "^^");
    }, 1000);
}

console.log("1 before heard");

heard([], (err, data) => {
    if (err) {
        console.error("AHHHHHHHHH, ERRORRRRRR, OMG, LOL", err);
        return;
    }
    console.log("4", data);
});

