import PropTypes from 'prop-types'; // PropTypes import

// 이미지와 텍스트 데이터를 배열로 관리
const styles = [
  { src: "/src/assets/prohibition.svg", alt: "No Style", label: "No style" },
  { src: "/src/assets/gray.jpeg", alt: "3d-model", label: "3d-model" },
  { src: "/src/assets/blur.jpeg", alt: "analog-film", label: "analog-film" },
  { src: "/src/assets/darken.jpeg", alt: "anime", label: "anime" },
  { src: "/src/assets/sepia.jpeg", alt: "cinematic", label: "cinematic" },
  { src: "/src/assets/sepia.jpeg", alt: "comic-book", label: "comic-book" },
  { src: "/src/assets/sepia.jpeg", alt: "digital-art", label: "digital-art" },
  { src: "/src/assets/sepia.jpeg", alt: "enhance", label: "enhance" },
  { src: "/src/assets/sepia.jpeg", alt: "fantasy-art", label: "fantasy-art" },
  { src: "/src/assets/sepia.jpeg", alt: "isometric", label: "isometric" },
  { src: "/src/assets/sepia.jpeg", alt: "line-art", label: "line-art" },
  { src: "/src/assets/sepia.jpeg", alt: "low-poly", label: "low-poly" },
  { src: "/src/assets/sepia.jpeg", alt: "modeling-compound", label: "modeling-compound" },
  { src: "/src/assets/sepia.jpeg", alt: "neon-punk", label: "neon-punk" },
  { src: "/src/assets/sepia.jpeg", alt: "origami", label: "origami" },
  { src: "/src/assets/sepia.jpeg", alt: "pixel-art", label: "pixel-art" },
  { src: "/src/assets/sepia.jpeg", alt: "photographic", label: "photographic" },
  { src: "/src/assets/sepia.jpeg", alt: "tile-texture", label: "tile-texture" },
];

export default function AiStyleModal({ isOpen, onClose, saveImageAttributes }) {
  const handleClick = (e) => {
    const styleLabel = e.currentTarget.id;
    saveImageAttributes({ style: styleLabel });
  };

  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-white text-lg mb-4">모든 스타일</h2>
        <div className="grid grid-cols-6 gap-4">
          {/* 이미지와 텍스트를 반복 렌더링 */}
          {styles.map((style) => (
            <div
              onClick={handleClick}
              id={style.label}
              key={style.label}
              className="max-w-28 h-24 bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden relative cursor-pointer"
            >
              <img
                src={style.src}
                alt={style.alt}
                className="h-full w-full object-cover"
              />
              <span className="text-white text-sm absolute bottom-2">
                {style.label}
              </span>
            </div>
          ))}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          닫기
        </button>
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
