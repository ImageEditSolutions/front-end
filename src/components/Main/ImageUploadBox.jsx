import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

const ImageUploadBox = () => {
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 파일 드롭 시 처리
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false); // 드래그 상태 종료

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const uploadedImage = URL.createObjectURL(files[0]);
      setImage(uploadedImage); // 이미지 미리보기 설정
      // 이미지 업로드 후 페이지 이동, 이미지 데이터를 함께 전달
      navigate('/image-edit', { state: { imageUrl: uploadedImage } });
    }
  };

  // 드래그 오버 시 시각적 변화를 위한 처리
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true); // 드래그 상태 활성화
  };

  // 드래그가 드롭 영역 밖으로 나갔을 때 상태 복원
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false); // 드래그 상태 종료 (드래그가 영역을 벗어나면 원상태로)
  };

  return (
    <div
      className={`w-80 h-40 bg-gray-800 rounded-lg flex items-center justify-center mx-auto transition-colors duration-300 ${dragActive ? 'border-2 border-blue-500' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave} // 드래그가 영역을 벗어나면 처리
      onDrop={handleDrop}
    >
      {image ? (
        <img
          src={image}
          alt="Uploaded"
          className="max-w-full max-h-full"
        />
      ) : (
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16l4-4m0 0l4 4m-4-4v12m13-12h-3.586l-1 1H8m0 0l1 1m3-1l4-4m0 0l4 4"
            />
          </svg>
          <p className="text-gray-400">이미지를 추가해주세요</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploadBox;

