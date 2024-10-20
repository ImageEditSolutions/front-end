// AiImageGenerationPage.jsx
import Header from '../components/Layout/Common/Header.jsx';
import TextToImagePanel from '../components/AIImageGeneration/TextToImagePanel.jsx';
import AiSidebar from '../components/AiImageGeneration/AiSidebar.jsx'; // 새로 분리한 컴포넌트 임포트
import { useState } from 'react';

export default function AiImageGenerationPage() {
  const [generatedImage, setGeneratedImage] = useState('/src/assets/ai-test-img.jpg');

  const submitPrompt = async (prompt) => {
    console.log('submit prompt: ', prompt);
    const res = await requestAIImageGeneration(prompt);
    if (res.status === 200) {
      setGeneratedImage(res.data.url);
    }
  }

  return (
    <section className="bg-gray-900 min-w-[1120px] h-full">
      <Header />
      <main className="flex">
        {/* 왼쪽: AiSidebar 컴포넌트 */}
        <AiSidebar />
        
        {/* 오른쪽: 기존 이미지 생성 패널 */}
        <div className="flex-1">
          <TextToImagePanel submitPrompt={submitPrompt} />
          <div className="flex justify-center items-center mt-16">
            <img className="rounded-2xl" src={generatedImage} alt="ai-image" />
          </div>
        </div>
      </main>
    </section>
  );
}
