// import axios from 'axios';
const apiKey = import.meta.env.VITE_STABILITY_API_KEY;

// let requestCount = 0;
//
// const logRequest = () => {
//   requestCount++;
//   console.log(`API 요청 수: ${requestCount}`);
// };
//
// axios.interceptors.request.use((config) => {
//   logRequest();
//   return config;
// });

const requestAIImageGeneration = async ({ text, style, numImages}) => {
  const engineId = 'stable-diffusion-v1-6';
  const apiHost = 'https://api.stability.ai';

  if (!apiKey) throw new Error('Missing Stability API key.');

  const requestBody = {
    text_prompts: [{ text }],
    cfg_scale: 7,
    steps: 30,
    samples: numImages || 1, // 이미지 개수 설정
    style_preset: style || 'photographic',
  };

  const response = await fetch(
    `${apiHost}/v1/generation/${engineId}/text-to-image`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    }
  );

  console.log(response);

  if (!response.ok) {
    throw new Error(`Non-200 response: ${await response.text()}`);
  }

  const responseJSON = await response.json();
  return responseJSON.artifacts.map((artifact) => `data:image/png;base64,${artifact.base64}`);
};

export default requestAIImageGeneration;
