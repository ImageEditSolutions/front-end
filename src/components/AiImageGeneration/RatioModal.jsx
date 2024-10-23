import PropTypes from 'prop-types'; // PropTypes import

export default function RatioModal({ isOpen, onClose }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  const ratios = [
    { label: '1:1', svg: '/assets/1-1.svg' },
    { label: '9:16', svg: '/assets/9-16.svg' },
    { label: '16:9', svg: '/assets/16-9.svg' },
    { label: '4:3', svg: '/assets/4-3.svg' },
    { label: '3:4', svg: '/assets/3-4.svg' },
    { label: '3:2', svg: '/assets/3-2.svg' },
    { label: '2:3', svg: '/assets/2-3.svg' },
    { label: '4:5', svg: '/assets/4-5.svg' },
    { label: '5:4', svg: '/assets/5-4.svg' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-white text-lg mb-4">이미지 비율</h2>
        <div className="grid grid-cols-3 gap-4">
          {ratios.map((ratio, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={ratio.svg}
                alt={ratio.label}
                className="w-20 h-20 bg-gray-700 rounded-lg"
              />
              <span className="text-white mt-2">{ratio.label}</span>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

// PropTypes 정의
RatioModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // isOpen은 반드시 boolean이어야 함
  onClose: PropTypes.func.isRequired, // onClose는 반드시 함수여야 함
};

