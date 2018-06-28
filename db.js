let things = [];

function createTable(param) {
    if (!param) {
        return Promise.reject(new Error("Param can't be null"));
    }
    return Promise.resolve(param);
}
exports.createTable = createTable

function save(thing) {
    if (!thing) {
        return Promise.reject(new Error("Param can't be null"));
    }
    things.push(thing);
    return Promise.resolve(thing);
}
exports.save = save;

function getAll() {
    return Promise.resolve(things);
}
exports.getAll = getAll;