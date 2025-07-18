import { useState } from "react";
export default function AIAdvisor({ imageBase64 }) {
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const ask = async () => {
    if (!imageBase64) return;
    setLoading(true);
    const resp = await fetch("http://localhost:3001/ask-gemini", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ base64Image: imageBase64 })
    });
    const data = await resp.json();
    setRes(data.response || "Нет ответа");
    setLoading(false);
  };
  return (
    <div className="mt-4">
      <button onClick={ask} className="btn">
        {loading? "AI анализирует..." : "Получить совет от AI 🤖"}
      </button>
      {res && <div className="mt-2 bg-gray-100 p-2 rounded whitespace-pre-line"><strong>AI советует:</strong><br/>{res}</div>}
    </div>
  );
}