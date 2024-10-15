const REPLICATE_MODEL_VERSION =
  "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa";

const startGeneration = async (text) => {
  const res = await fetch(`${process.env.REPLICATE_API_URL}/predictions`, {
    headers: {
      Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      version: REPLICATE_MODEL_VERSION,
      input: { text },
    }),
  });
  return res.json();
};

const getGeneration = async (url) => {
  const result = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  return result.json();
};

export default async function handler(req, res) {
  const { text } = req.body;
  if (!text) {
    res.status(400).json("No text provided");
  }

  const predictions = await startGeneration(text);

  let generatedImage;

  while (!generatedImage) {
    const result = await getGeneration(predictions.urls.get);
    if (result.status === "succeeded") {
      [generatedImage] = result.output;
    } else if (result.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
  res.status(200).json(generatedImage ? generatedImage : "Failed");
}
