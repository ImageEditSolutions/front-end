// AiImageGenerationPage.jsx
import Header from '../components/Layout/Common/Header.jsx';
import TextToImagePanel from '../components/AIImageGeneration/TextToImagePanel.jsx';
import AiSidebar from '../components/AiImageGeneration/AiSidebar.jsx'; // 새로 분리한 컴포넌트 임포트
import { useState } from 'react';
import { requestAIImageGeneration } from '../api/ai/aiApi.js';
import { useNavigate } from 'react-router-dom';

export default function AiImageGenerationPage() {
  const [generatedImage, setGeneratedImage] = useState('/src/assets/ai-test-img.jpg');
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate('/image-edit', { state: { imageUrl: generatedImage } });
  }

  return (
    <section className="bg-gray-900 min-w-[1120px] h-full pb-16">
      <Header />
      <main className="flex">
        {/* 왼쪽: AiSidebar 컴포넌트 */}
        <AiSidebar />
        
        {/* 오른쪽: 기존 이미지 생성 패널 */}
        <div className="flex-1">
          <TextToImagePanel submitPrompt={submitPrompt} />
          <div className="flex flex-col justify-center items-center mt-16">
            <img className="rounded-2xl" src={generatedImage} alt="ai-image" />
            <button className="bg-blue-200 rounded-lg w-44 h-12 mt-6" onClick={handleClick}>이미지 사용하기</button>
          </div>
        </div>
      </main>
    </section>
  );
}
