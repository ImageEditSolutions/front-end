import PropTypes from 'prop-types'; // PropTypes import

// 이미지와 텍스트 데이터를 배열로 관리
const styles = [
  { src: "/src/assets/prohibition.svg", alt: "No Style", label: "No style" },
  { src: "/src/assets/gray.jpeg", alt: "Gray", label: "Gray" },
  { src: "/src/assets/blur.jpeg", alt: "Blur", label: "Blur" },
  { src: "/src/assets/darken.jpeg", alt: "Darken", label: "Darken" },
  { src: "/src/assets/sepia.jpeg", alt: "Sepia", label: "Sepia" },
  { src: "/src/assets/sketch.jpeg", alt: "sketch", label: "sketch" },
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
        <div className="grid grid-cols-3 gap-4">
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

