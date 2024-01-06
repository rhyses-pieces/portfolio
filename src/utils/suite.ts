import { create, test, enforce } from "vest";
import "vest/enforce/email";

const suite = create((data = {}) => {
  test("name", "Name must not be blank.", () => {
    enforce(data.name).isNotBlank();
  });

  test("email", "Email must not be blank.", () => {
    enforce(data.email).isNotBlank();
  });

  test("email", "Email must be in correct format.", () => {
    enforce(data.email).isEmail();
  });

  test("message", "Message must not be blank, and should be more than 2 characters.", () => {
    enforce(data.message).isNotBlank();
  });

  test("_gotcha", "Something went wrong!", () => {
    enforce(data._gotcha).isBlank();
  });
});

suite.reset();

export default suite;