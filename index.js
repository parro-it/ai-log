export default async function aiLog(data) {
  for (const item of data) {
    await item;
  }
}
