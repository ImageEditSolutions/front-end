import { useState } from 'react';
import AiStyleModal from './AiStyleModal'; // 스타일 모달 컴포넌트 import
import PropTypes from 'prop-types'; // PropTypes import

const previewImg = [
  { src: "/images/ai/style/style_photographic.jpg", alt: "photographic", label: "photographic" },
  { src: "/images/ai/style/style_fantasy-art.jpg", alt: "fantasy-art", label: "fantasy-art" },
  { src: "/images/ai/style/style_anime.jpg", alt: "anime", label: "anime" },
]

export default function AiSidebar({ saveImageAttributes }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 스타일 모달 상태
  const [selectedStyle, setSelectedStyle] = useState('photographic'); // 선택된 스타일 상태
  const [selectedNum, setSelectedNum] = useState(1);

  // 모달 열기/닫기 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const applyStyle = (data, type) => {
    if (type === 'style') {
      setSelectedStyle(data);
      saveImageAttributes({ style: data });
    }
    else if (type === 'num') {
      setSelectedNum(data);
      saveImageAttributes({ numImages: data });
    }

    // twin marco... 선택된 스타일에 border 주기. 리팩토링 해보기.
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg mt-6 ml-6 w-72 z-10">
      {/* 이미지 설정 섹션 */}
      <h1 className="text-white text-lg mb-14">Image Settings</h1>

      {/* 스타일 설정 */}
      <div className="mb-6">
        <div className="flex cursor-pointer">
          <h2 className="text-white text-sm mb-2">스타일</h2>
          <button className="text-sm text-blue-400 ml-auto" onClick={openModal}>See All</button>
        </div>
        <div className="flex items-center space-x-2">
          {previewImg.map((img, ) => (
            <div
              onClick={(e) => applyStyle(e.currentTarget.id, 'style')}
              id={img.label}
              key={img.label}
              className={`${selectedStyle === img.label ? " border-2 border-white" : "hover:border-2 hover:border-sky-400"} relative w-20 h-20 bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:border-2 hover:border-white transition`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-2 text-white text-xs mt-1">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 이미지 개수 설정 */}
      <div className="mb-6">
        <h2 className="text-white text-sm mb-2">이미지 갯수</h2>
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map(num => (
            <button
              key={num}
              id={num}
              onClick={(e) => applyStyle(num, 'num')}
              className={`${selectedNum === num ? " border-2 border-white" : "hover:border-2 hover:border-sky-400"} hover:border-2 hover:border-white w-12 h-12 bg-gray-700 text-white rounded-lg flex flex-1 items-center justify-center cursor-pointer transition`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* 스타일 모달 */}
      {isModalOpen &&
        <AiStyleModal onClose={closeModal} selectedStyle={selectedStyle} applyStyle={applyStyle}/>
      }
    </div>
  );
}

// PropTypes 설정
AiSidebar.propTypes = {
  saveImageAttributes: PropTypes.func.isRequired, // 함수형 prop 타입 지정
};
