// BEGIN
export default bind = (obj, fn) => {
    return function(...argument) {
        return fn.call(obj, ...argument);
    }
}
// END