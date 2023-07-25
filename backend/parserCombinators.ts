type JSONValue = string | number | boolean | null | JSONArray | JSONObject;

interface JSONArray extends Array<JSONValue> {}

interface JSONObject {
  [key: string]: JSONValue;
}

export function parseJSON(jsonString: string): JSONValue | null {
  let index = 0;
  return parseValue();

  function parseValue(): JSONValue | null {
    skipWhitespace();
    if (jsonString[index] === '"') {
      return parseString();
    } else {
      return 0;
    }
  }

  function parseObject(): JSONObject {
    const obj: JSONObject = {};
    index++; // Skip the '{'
    while (jsonString[index] !== '}') {
      const key = parseString();
      index++; // Skip the ':'
      const value = parseValue();
      obj[key] = value;
      skipWhitespace();
      if (jsonString[index] === ',') {
        index++;
      }
    }
    index++; // Skip the '}'
    return obj;
  }

  function parseString(): string {
    index++; // Skip the opening '"'
    let str = '';
    while (jsonString[index] !== '"') {
      str += jsonString[index++];
    }
    index++; // Skip the closing '"'
    return str;
  }

  function skipWhitespace() {
    while (
      jsonString[index] &&
      /\s/.test(jsonString[index])
    ) {
      index++;
    }
  }
}