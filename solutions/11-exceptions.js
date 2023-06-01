export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export const parseJson = (string) => {
  try {
    const json = JSON.parse(string);
    return json;
  } catch (error) {
    throw new ParseError('Invalid JSON string');
  }
};
// END
