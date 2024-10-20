

export default function AiModal({ isOpen, onClose }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-white text-lg mb-4">모든 스타일</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* 모달에 표시할 이미지들 */}
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Nostyle.svg" alt="No Style" className="h-12 w-12" />
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Realistic.png" alt="Realistic" className="h-12 w-12" />
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Art.png" alt="Art" className="h-12 w-12" />
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Sketch.png" alt="Sketch" className="h-12 w-12" />
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Minimal.png" alt="Minimal" className="h-12 w-12" />
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="/src/assets/Picasso.png" alt="Picasso" className="h-12 w-12" />
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}
