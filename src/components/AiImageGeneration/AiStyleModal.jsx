import PropTypes from 'prop-types'; // PropTypes import
import { useState } from 'react';

// 이미지와 텍스트 데이터를 배열로 관리
const styles = [
  { src: "/images/ai/style/Nostyle.svg", alt: "No Style", label: "No style" },
  { src: "/images/ai/style/style_3D-model.jpg", alt: "3d-model", label: "3d-model" },
  { src: "/images/ai/style/style_analog-film.jpg", alt: "analog-film", label: "analog-film" },
  { src: "/images/ai/style/style_anime.jpg", alt: "anime", label: "anime" },
  { src: "/images/ai/style/style_cineatic.jpg", alt: "cinematic", label: "cinematic" },
  { src: "/images/ai/style/style_comic-book.jpg", alt: "comic-book", label: "comic-book" },
  { src: "/images/ai/style/style_digital art.jpg", alt: "digital-art", label: "digital-art" },
  { src: "/images/ai/style/style_enhance.jpg", alt: "enhance", label: "enhance" },
  { src: "/images/ai/style/style_fantasy-art.jpg", alt: "fantasy-art", label: "fantasy-art" },
  { src: "/images/ai/style/style_isometric.jpg", alt: "isometric", label: "isometric" },
  { src: "/images/ai/style/style_line-art.jpg", alt: "line-art", label: "line-art" },
  { src: "/images/ai/style/style_low-poly.jpg", alt: "low-poly", label: "low-poly" },
  { src: "/images/ai/style/style_modeling-compund_tree.jpg", alt: "modeling-compound", label: "modeling-compound" },
  { src: "/images/ai/style/style_neon-art.jpg", alt: "neon-punk", label: "neon-punk" },
  { src: "/images/ai/style/style_origami.jpg", alt: "origami", label: "origami" },
  { src: "/images/ai/style/style_photographic.jpg", alt: "photographic", label: "photographic" },
  { src: "/images/ai/style/style_picxel-art.jpg", alt: "pixel-art", label: "pixel-art" },
  { src: "/images/ai/style/style_tile-texture.jpg", alt: "tile-texture", label: "tile-texture" },
];

export default function AiStyleModal({ isOpen, onClose, saveImageAttributes }) {
  const [selectedStyle, setSelectedStyle] = useState(''); // 선택된 스타일 상태

  // 스타일 선택 핸들러
  const handleClick = (e) => {
    const styleLabel = e.currentTarget.id;
    setSelectedStyle(styleLabel); // 선택된 스타일 업데이트
  };

  // 선택된 스타일 적용 핸들러
  const applyStyle = () => {
    if (selectedStyle) {
      saveImageAttributes({ style: selectedStyle });
      alert(`${selectedStyle} 스타일이 적용되었습니다.`);
    } else {
      alert("스타일을 먼저 선택해주세요.");
    }
  };

  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-white text-lg mb-4 text-center">모든 스타일</h2>
        <div className="grid grid-cols-6 gap-4">
          {/* 이미지와 텍스트를 반복 렌더링 */}
          {styles.map((style) => (
            <div
              onClick={handleClick}
              id={style.label}
              key={style.label}
              className={`max-w-28 h-24 bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden relative cursor-pointer 
                transition ${selectedStyle === style.label ? "border-2 border-sky-400" : "hover:border-2 hover:border-sky-400"}`}
            >
              <img
                src={style.src}
                alt={style.alt}
                className="h-full w-full object-cover"
              />
              <span className="text-white text-sm absolute bottom-0 bg-black bg-opacity-50 w-full text-center py-1">
                {style.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={applyStyle}
          >
            스타일 적용하기
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

// PropTypes 정의
AiStyleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // isOpen은 반드시 boolean이어야 함
  onClose: PropTypes.func.isRequired, // onClose는 반드시 함수여야 함
  saveImageAttributes: PropTypes.func.isRequired, // saveImageAttributes는 반드시 함수여야 함
};
