import Header from '../components/Layout/Common/Header.jsx';
import TextToImagePanel from '../components/AIImageGeneration/TextToImagePanel.jsx';
import { requestAIImageGeneration } from '../api/imageService.js';
import { useState } from 'react';

export default function AiImageGenerationPage() {
  const [generatedImage, setGeneratedImage] = useState('');

  const submitPrompt = async (prompt) => {
    console.log('submit prompt: ', prompt);
    const res = await requestAIImageGeneration(prompt);
    if (res.status === 200) {
      setGeneratedImage(res.data.url);
    }
  }

  return (
    <section className="bg-gray-900 min-w-[1120px]">
      <Header />
      <main>
        <TextToImagePanel submitPrompt={submitPrompt}/>
      </main>
    </section>
  );
}