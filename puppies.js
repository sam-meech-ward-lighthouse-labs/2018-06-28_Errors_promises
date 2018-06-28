
/*
puppies must not be an empty array
*/
function randomPuppy(puppies) {
    if (!puppies) {
        throw new Error("Where the puppies at?");
    }
    if (puppies.length === 0) {
        throw new Error("Errrrrrrrr empty arrrrrrr");
    }
    const randIndex = Math.floor(Math.random() * puppies.length);
    return puppies[randIndex];
}

// const puppies = ["dash hound", "weiner", "pug", "frenchy", "bull dog"];
const puppies = [];

let random;
try {
    random = randomPuppy(puppies);
} catch (err) {
    console.log("error with random puppies", err);
}

// console.log(random);
// console.log("Stuff that I want to happen later");

// const error = new Error(":)");
// console.log(error);