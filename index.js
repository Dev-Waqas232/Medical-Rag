import { getEmbedding } from "./embed.js";

(async () => {
  const vector = await getEmbedding("Ibuprofen interacts with blood thinners");
  console.log(vector.length);
  console.log(vector.slice(0, 5));
})();
