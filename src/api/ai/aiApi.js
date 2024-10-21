const apiKey = import.meta.env.VITE_HUGGINGFACE_TOKEN;

// AI 관련 API
export const requestAIImageGeneration = async (prompt) => {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: prompt }),
      }
    );
    if(response.ok) {
      const result = await response.blob();
      return result;
    }
  } catch (err) {
    console.error("API 호출 오류:", err);
  }
};