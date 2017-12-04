import tap from "ai-tap";
export default (tag, stream = process.stderr) =>
  tap(item => stream.write(`[${tag}] ${String(item)}\n`));
