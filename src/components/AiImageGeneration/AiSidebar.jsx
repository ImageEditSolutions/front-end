import { useState } from 'react';
import AiStyleModal from './AiStyleModal'; // 스타일 모달 컴포넌트 import
import RatioModal from './RatioModal'; // 비율 모달 컴포넌트 import

export default function AiSidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 스타일 모달 상태
  const [isRatioModalOpen, setIsRatioModalOpen] = useState(false); // 비율 모달 상태

  // 모달 열기/닫기 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openRatioModal = () => setIsRatioModalOpen(true);
  const closeRatioModal = () => setIsRatioModalOpen(false);

  return (
    <div className="w-1/4 p-4 bg-gray-900">
      {/* 이미지 설정 섹션 */}
      <h1 className="text-white text-lg mb-4">Image Settings</h1>

      {/* 스타일 설정 */}
      <div className="mb-6">
        <h2 className="text-white text-sm mb-2">스타일</h2>
        <div className="flex items-center space-x-2">
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Nostyle.svg" alt="No Style" className="h-12 w-12" style={{ objectFit: 'contain' }} />
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Realistic.png" alt="Realistic" className="h-12 w-12" />
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Art.png" alt="Art" className="h-12 w-12" />
          </div>
          <a href="#" className="text-sm text-blue-400 ml-auto" onClick={openModal}>See All</a>
        </div>
      </div>

      {/* 이미지 개수 설정 */}
      <div className="mb-6">
        <h2 className="text-white text-sm mb-2">이미지 갯수</h2>
        <div className="flex space-x-2">
          <button className="w-12 h-12 bg-gray-700 text-white rounded-lg flex items-center justify-center">1</button>
          <button className="w-12 h-12 bg-gray-700 text-white rounded-lg flex items-center justify-center">2</button>
          <button className="w-12 h-12 bg-gray-700 text-white rounded-lg flex items-center justify-center">3</button>
          <button className="w-12 h-12 bg-gray-700 text-white rounded-lg flex items-center justify-center">4</button>
        </div>
      </div>

      {/* 이미지 비율 설정 */}
      <div className="mb-6">
        <h2 className="text-white text-sm mb-2">이미지 비율</h2>
        <div className="relative">
          <button className="w-full bg-gray-700 text-white p-2 rounded-lg" onClick={openRatioModal}>
            비율 선택
          </button>
        </div>
      </div>

      {/* 스타일 모달 */}
      <AiStyleModal isOpen={isModalOpen} onClose={closeModal} />

      {/* 이미지 비율 모달 */}
      <RatioModal isOpen={isRatioModalOpen} onClose={closeRatioModal} />
    </div>
  );
}
