import PropTypes from 'prop-types'; // PropTypes를 import

export default function AiStyleModal({ isOpen, onClose }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  // 이미지와 텍스트 데이터를 배열로 관리
  const styles = [
    { src: "/src/assets/prohibition.svg", alt: "No Style", label: "No style" },
    { src: "/src/assets/gray.jpeg", alt: "Realistic", label: "Realistic" },
    { src: "/src/assets/blur.jpeg", alt: "Art", label: "Art" },
    { src: "/src/assets/darken.jpeg", alt: "Sketch", label: "Sketch" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-white text-lg mb-4">모든 스타일</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* 이미지와 텍스트를 반복 렌더링 */}
          {styles.map((style, index) => (
            <div
              key={index}
              className="w-20 h-24 bg-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-4 hover:border-blue-400 "
            >
              <img src={style.src} alt={style.alt} className="h-12 w-12 mb-2" />
              <span className="text-white text-sm">{style.label}</span> {/* 텍스트 추가 */}
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

// PropTypes 정의
AiStyleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // isOpen은 반드시 boolean이어야 함
  onClose: PropTypes.func.isRequired, // onClose는 반드시 함수여야 함
};

