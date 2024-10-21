const headers = {
  "x-rapidapi-key": process.env.OPENAI_API_KEY,
  "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
  "Content-Type": "application/json",
};

const startGeneration = async (text) => {
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      inputs: text,
    }),
  };

  const res = await fetch(process.env.OPENAI_API_URL, options);
  return res.json();
};

export default async function handler(req, res) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json("No text provided");
  }

  try {
    const result = await startGeneration(text);

    if (result && result.url) {
      return res.status(200).json({ imageUrl: result.url });
    } else {
      return res.status(500).json("Failed to generate image");
    }
  } catch (error) {
    console.error("Error during image generation:", error);
    return res.status(500).json("Error generating image");
  }
}
