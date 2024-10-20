import PropTypes from 'prop-types';

const PreviousImages = ({ previousImages }) => {
  return (
    <div className="w-72 bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col">
      {/* 이미지 목록 제목 */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">이전에 작업한 이미지들</h2>
        <p className="text-gray-400 text-sm">
          최근 작업한 이미지를 아래에서 확인하세요.
        </p>
      </div>

      {/* 이미지 목록 */}
      <div className="space-y-4 flex-grow overflow-y-auto h-full">
        {previousImages && previousImages.length >= 0 ? (
          previousImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`이전 작업 이미지 ${index + 1}`}
              className="w-full h-36 object-cover rounded-lg"
            />
          ))
        ) : (
          <p className="text-center text-gray-500">이전 작업 이미지가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

// PropTypes로 props 검증
PreviousImages.propTypes = {
  previousImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PreviousImages;
