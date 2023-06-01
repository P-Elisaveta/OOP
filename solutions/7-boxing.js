// BEGIN
const sum = (...args) => {
    const summa = args.reduce((accaunt, i) => accaunt + i, 0);
    const addNextValues = (...nextArgs) => sum(summa, ...nextArgs);
    addNextValues.valueOf = () => summa;
    return addNextValues;
  };
  
  export default sum;
// END
