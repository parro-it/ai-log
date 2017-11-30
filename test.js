import test from "tape-async";
import aiLog from ".";

test("exports a function", async t => {
  t.is(typeof aiLog, "function");
});
