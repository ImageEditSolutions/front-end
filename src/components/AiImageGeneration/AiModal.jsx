export default function AiModal({ isOpen, onClose }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  // 이미지와 텍스트 데이터를 배열로 관리
  const styles = [
    { src: "/src/assets/Nostyle.svg", alt: "No Style", label: "No style" },
    { src: "/src/assets/Realistic.png", alt: "Realistic", label: "Realistic" },
    { src: "/src/assets/Art.png", alt: "Art", label: "Art" },
    { src: "/src/assets/Sketch.png", alt: "Sketch", label: "Sketch" },
    { src: "/src/assets/Minimal.png", alt: "Minimal", label: "Minimal" },
    { src: "/src/assets/Picasso.png", alt: "Picasso", label: "Picasso" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-white text-lg mb-4">모든 스타일</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* 이미지와 텍스트를 반복 렌더링 */}
          {styles.map((style, index) => (
            <div key={index} className="w-20 h-24 bg-gray-700 rounded-lg flex flex-col items-center justify-center">
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

