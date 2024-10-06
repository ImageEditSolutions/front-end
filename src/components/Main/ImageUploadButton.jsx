import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅 사용

const ImageUploadButton = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  // 파일 선택 시 처리
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImage = URL.createObjectURL(file);
      
      // 이미지 업로드 후 /image-edit 페이지로 이동, 이미지 URL을 state로 전달
      navigate('/image-edit', { state: { imageUrl: uploadedImage } });
    }
  };

  // 버튼 클릭 시 파일 입력 창 열기
  const handleUploadClick = () => {
    fileInputRef.current.click(); // 숨겨진 파일 입력을 클릭
  };

  return (
    <>
      {/* 파일 업로드 입력 (숨김 처리) */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* 업로드 버튼 */}
      <button
        className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        onClick={handleUploadClick}
      >
        이미지 업로드
      </button>
    </>
  );
};

export default ImageUploadButton;


