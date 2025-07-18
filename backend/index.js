const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json({ limit: "25mb" }));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/ask-gemini", async (req, res) => {
  const { base64Image } = req.body;
  if (!base64Image) return res.status(400).json({ error: "No image provided" });
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      { text: "Предложи стиль и советы по одежде для человека на этом фото." },
      { inlineData: { mimeType: "image/jpeg", data: base64Image.split(",")[1] }},
    ]);
    const text = await result.response.text();
    res.json({ response: text });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(port, () => {
  console.log(`Backend запущен на http://localhost:${port}`);
});