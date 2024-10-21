// AiImageGenerationPage.jsx
import Header from '../components/Layout/Common/Header.jsx';
import TextToImagePanel from '../components/AIImageGeneration/TextToImagePanel.jsx';
import AiSidebar from '../components/AiImageGeneration/AiSidebar.jsx'; // 새로 분리한 컴포넌트 임포트
import { useState } from 'react';
import { requestAIImageGeneration } from '../api/ai/aiApi.js';

export default function AiImageGenerationPage() {
  const [generatedImage, setGeneratedImage] = useState('/src/assets/ai-test-img.jpg');

  const submitPrompt = async (prompt) => {
    console.log('submit prompt: ', prompt);
    const res = await requestAIImageGeneration(prompt);

    if(res) {
      const imageUrl = URL.createObjectURL(res);
      if (imageUrl) {
        console.log("이미지 생성 성공");
        // 이미지를 화면에 렌더링하거나 처리하는 코드
        setGeneratedImage(imageUrl);
      }
    } else {
      console.log('실패')
    }
  }

  return (
    <section className="bg-gray-900 min-w-[1120px] h-full">
      <Header />
      <main className="flex">
        <AiSidebar />
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
