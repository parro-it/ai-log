import test from "tape-async";
import log from ".";
import map from "ai-map";
import compose from "compose-function";
import concat from "concat-stream";

const awaitIterable = async iterable => {
  const generator = iterable[Symbol.asyncIterator] || iterable[Symbol.iterator];
  const iterator = generator.call(iterable);
  let item = {};
  while (!item.done) {
    item = await iterator.next();
  }
};

test("exports a function", async t => {
  const result = concat(data => {
    t.is(
      data,
      "[double result] 2\n[double result] 4\n[double result] 6\n[add2 result] 4\n[add2 result] 6\n[add2 result] 8\n"
    );
  });

  const double = map.with(n => n * 2);
  const add2 = map.with(n => n + 2);
  const calculate = compose(
    awaitIterable,
    log("add2 result", result),
    add2,
    log("double result", result),
    double
  );

  await calculate([1, 2, 3]);
  result.end();
  t.is(typeof log, "function");
});
