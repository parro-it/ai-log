import map from "ai-map";
export default (tag, stream = process.stderr) =>
  map.with(item => {
    stream.write(`[${tag}] ${String(item)}\n`);
    return item;
  });
