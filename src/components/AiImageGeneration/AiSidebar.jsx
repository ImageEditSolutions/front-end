import { useState } from 'react';
import AiStyleModal from './AiStyleModal'; // 스타일 모달 컴포넌트 import

import PropTypes from 'prop-types'; // PropTypes import

export default function AiSidebar({ saveImageAttributes }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 스타일 모달 상태

  // 모달 열기/닫기 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 bg-gray-800 rounded-lg mt-6 ml-6 w-72 z-10">
      {/* 이미지 설정 섹션 */}
      <h1 className="text-white text-lg mb-14">Image Settings</h1>

      {/* 스타일 설정 */}
      <div className="mb-6">
        <div className="flex">
          <h2 className="text-white text-sm mb-2">스타일</h2>
          <button className="text-sm text-blue-400 ml-auto" onClick={openModal}>See All</button>
        </div>
        <div className="flex items-center space-x-2">
          {/* No Style */}
          <div className="relative w-20 h-20 bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden">
            <img src="/images/ai/style/Nostyle.svg" alt="No Style" className="h-full w-full object-cover" />
            <span className="absolute bottom-2 text-white text-xs mt-1">No style</span>
          </div>
          {/* Realistic */}
          <div className="relative w-20 h-20 bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden">
            <img src="/images/ai/style/style_anime.jpg" alt="anime" className="h-full w-full object-cover" />
            <span className="absolute bottom-2 text-white text-xs mt-1">Anime</span>
          </div>
          {/* Art */}
          <div className="relative w-20 h-20 bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden">
            <img src="/images/ai/style/style_photographic.jpg" alt="photographic" className="h-full w-full object-cover" />
            <span className="absolute bottom-2 text-white text-xs mt-1">photographic</span>
          </div>
        </div>
      </div>

      {/* 이미지 개수 설정 */}
      <div className="mb-6">
        <h2 className="text-white text-sm mb-2">이미지 갯수</h2>
        <div className="flex space-x-2">
          <button onClick={(e) => saveImageAttributes({ numImages: Number(e.currentTarget.innerText) })} className="w-12 h-12 bg-gray-700 text-white rounded-lg flex flex-1 items-center justify-center">1</button>
          <button onClick={(e) => saveImageAttributes({ numImages: Number(e.currentTarget.innerText) })} className="w-12 h-12 bg-gray-700 text-white rounded-lg flex flex-1 items-center justify-center">2</button>
          <button onClick={(e) => saveImageAttributes({ numImages: Number(e.currentTarget.innerText) })} className="w-12 h-12 bg-gray-700 text-white rounded-lg flex flex-1 items-center justify-center">3</button>
          <button onClick={(e) => saveImageAttributes({ numImages: Number(e.currentTarget.innerText) })} className="w-12 h-12 bg-gray-700 text-white rounded-lg flex flex-1 items-center justify-center">4</button>
        </div>
      </div>

      {/* 스타일 모달 */}
      <AiStyleModal isOpen={isModalOpen} onClose={closeModal} saveImageAttributes={saveImageAttributes}/>
    </div>
  );
}

// PropTypes 설정
AiSidebar.propTypes = {
  saveImageAttributes: PropTypes.func.isRequired, // 함수형 prop 타입 지정
};
