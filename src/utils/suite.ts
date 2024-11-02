import { create, test, enforce } from "vest";
import "vest/enforce/email";

const suite = create((data = {}) => {
  test("name", "Name is required.", () => {
    enforce(data.name).isNotEmpty();
  });

  test("name", "Name must not be blank.", () => {
    enforce(data.name).isNotBlank();
  });

  test("email", "Email is required.", () => {
    enforce(data.email).isNotEmpty();
  })

  test("email", "Email must not be blank.", () => {
    enforce(data.email).isNotBlank();
  });

  test("email", "Email must be in correct format.", () => {
    enforce(data.email).isEmail();
  });

  test("message", "Message is required.", () => {
    enforce(data.message).isNotEmpty();
  });

  test("message", "Message must not be blank.", () => {
    enforce(data.message).isNotBlank();
  });

  test("message", "Message should be more than 2 characters.", () => {
    enforce(data.message).longerThan(2);
  });

  test("bot-field", "Something went wrong!", () => {
    enforce(data["bot-field"]).isEmpty();
  });
});

export default suite;