// AiImageGenerationPage.jsx
import Header from '../components/Layout/Common/Header.jsx';
import TextToImagePanel from '../components/AIImageGeneration/TextToImagePanel.jsx';
import AiSidebar from '../components/AiImageGeneration/AiSidebar.jsx'; // 새로 분리한 컴포넌트 임포트
import { useRef, useState } from 'react';
import requestAIImageGeneration from '../api/ai/aiApi.js';
import { useNavigate } from 'react-router-dom';

export default function AiImageGenerationPage() {
  const [generatedImages, setGeneratedImages] = useState(['/src/assets/ai-test-img.jpg', '/src/assets/test.jpeg']);
  const navigate = useNavigate();
  const imageAttrRef = useRef({text: '', style: '', numImages: 1});
  const selectedUrl = useRef(null);

  // const submitPrompt = async (prompt) => {
  //   console.log('submit prompt: ', prompt);
  //
  //   imageAttrRef.current = {
  //     ...imageAttrRef.current,
  //     text: prompt,
  //   }
  //
  //   try {
  //     const imageUrls = await requestAIImageGeneration(imageAttrRef.current);
  //     if (imageUrls) {
  //       console.log('이미지 생성 성공');
  //       // 이미지를 화면에 렌더링하거나 처리하는 코드
  //       setGeneratedImages(imageUrls);
  //     }
  //   } catch (error) {
  //     console.error('Error generating images:', error);
  //   }
  // };

  const saveImageAttributes = (attr) => {
    imageAttrRef.current = {
      ...imageAttrRef.current,
      ...attr
    }
    console.log(imageAttrRef.current);
  };

  const handleClick = () => {
    navigate('/image-edit', { state: { imageUrl: generatedImages.length > 1 ?  selectedUrl.current : generatedImages[0] } });
  };

  const handleChange = (e) => {
    const checkedId = e.target.id;
    const number = checkedId.match(/\d+/)[0];
    selectedUrl.current = generatedImages[number];
  }

  return (
    <section className="flex flex-col bg-gray-900 min-w-[1120px] min-h-screen pb-16">
      <Header />
      <main className="flex flex-1">
        {/* 왼쪽: AiSidebar 컴포넌트 */}
        <AiSidebar saveImageAttributes={saveImageAttributes}/>

        {/* 오른쪽: 기존 이미지 생성 패널 */}
        <div className="flex flex-col flex-1 min-w-[800px] px-40 max-w-[1550px]">
          <TextToImagePanel submitPrompt={submitPrompt} />
          <div className="w-full flex flex-col justify-between items-center flex-1 mt-16">
            <li className="flex flex-wrap justify-center gap-[10%] gap-y-12 items-center w-full">
              {generatedImages.length > 1 ?
                generatedImages.map((image, i) => (
                  <label key={`GeneratedImage${i}`}
                         className={`relative rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer bg-[url(${image})] w-[45%] aspect-[16/9]`}
                         style={{ backgroundImage: `url(${image})` }}>
                    <input className="absolute right-4 top-4 " type="radio" name="generatedImage" onChange={handleChange} id={`generatedImage${i}`} />
                  </label>
                  )
                )
                :
                <img className="rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer w-[70%]" src={generatedImages[0]} alt="ai-generatedImage" />
              }
            </li>
            <button className="bg-blue-200 rounded-lg w-44 h-12 mt-[5%]" onClick={handleClick}>이미지 사용하기</button>
          </div>
        </div>
      </main>
    </section>
  );


}