export default function RatioModal({ isOpen, onClose }) {
    if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-white text-lg mb-4">이미지 비율</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* 비율 모달에 표시할 옵션들 */}
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              1:1
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              9:16
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              16:9
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              4:3
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              3:4
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              3:2
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              2:3
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              4:5
            </div>
            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              5:4
            </div>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>닫기</button>
        </div>
      </div>
    );
  }