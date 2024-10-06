import React, { useState } from 'react';
import Header from "../components/Header";

function AiImageGenerationPage() {
  // 에셋 폴더에 있는 이미지 중 메뉴, 엘우, 백드라운드를 제외한 이미지 경로들
  const [generatedImages, setGeneratedImages] = useState([
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
    "/assets/image4.jpg",
    "/assets/image5.jpg",
    "/assets/image6.jpg",
    // 필요한 만큼 이미지를 추가
  ]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        {/* 상단 제목 */}
        <h1 className="text-2xl font-bold mb-6">AI 이미지 생성 창</h1>

        {/* 필터 섹션 */}
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          <h2 className="text-lg font-bold mb-2">AI로 프로필 생성하기</h2>
          <p className="text-sm text-gray-500 mb-4">필요한 설정값을 자유롭게 선택해주세요.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 필터 버튼들 */}
            <button className="border border-gray-300 p-2 rounded">상체부터 선택</button>
            <button className="border border-gray-300 p-2 rounded">색상 설정</button>
            <button className="border border-gray-300 p-2 rounded">조명 설정</button>
            <button className="border border-gray-300 p-2 rounded">구도 설정</button>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
            이미지 생성하기
          </button>
        </div>

        {/* 생성된 이미지 섹션 */}
        <section>
          <h2 className="text-xl font-bold mb-4">생성된 이미지</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {generatedImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Generated Image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AiImageGenerationPage;
