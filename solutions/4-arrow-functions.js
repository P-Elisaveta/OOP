// BEGIN
export default each = (object, callback) => {
    for (let i of object) {
        callback.apply(i);
    }
}
// END