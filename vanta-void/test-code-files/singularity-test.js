// ---------------------------------------------
// COMMENTS (line, block, doc)
// ---------------------------------------------

// This is a line comment
/* This is a block comment */
/**
 * This is a documentation comment
 * @param {string} name
 */

import fs from "fs";
import { join as joinPath } from "path";

// ---------------------------------------------
// KEYWORDS, CONTROL FLOW, STORAGE
// ---------------------------------------------

export class TestClass {
  static staticValue = 42;
  #privateField = true;

  constructor(name) {
    this.name = name ?? "Default";
  }

  async runTest(count = 10) {
    for (let i = 0; i < count; i++) {
      if (i % 2 === 0) {
        console.log(`Even: ${i}`);
      } else {
        console.log(`Odd: ${i}`);
      }
    }

    try {
      await this.#doAsyncThing();
    } catch (error) {
      console.error("Caught error:", error);
    }
  }

  // ---------------------------------------------
  // FUNCTIONS, METHODS, PARAMETERS
  // ---------------------------------------------

  #doAsyncThing(delay = 100) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), delay);
    });
  }
}

// ---------------------------------------------
// VARIABLES, CONSTANTS, LITERALS
// ---------------------------------------------

const NUMBER = 123.456;
const BOOLEAN = false;
const STRING = "Hello World";
const TEMPLATE = `Value: ${NUMBER}`;
const REGEX = /test-(\d+)/gi;
const ARRAY = [1, 2, 3, 4];
const OBJECT = {
  keyOne: "value",
  keyTwo: 999,
  nested: { inner: true }
};

// ---------------------------------------------
// OPERATORS, PUNCTUATION, BRACES
// ---------------------------------------------

let x = (NUMBER + 5) * 2 - 3 / 1;
x += 10;
x ||= 50;

// ---------------------------------------------
// JSX / HTML ATTRIBUTES
// ---------------------------------------------

function Component({ title }) {
  return (
    <div className="container" data-id="123">
      <h1>{title}</h1>
      <button disabled={false}>Click Me</button>
    </div>
  );
}

// ---------------------------------------------
// DECORATORS / ANNOTATIONS (TS/JS)
// ---------------------------------------------

@sealed
class DecoratedClass {
  method(param) {
    return param;
  }
}

// ---------------------------------------------
// ERROR SCOPE
// ---------------------------------------------

// Uncomment to test error highlighting:
// const broken = ;
