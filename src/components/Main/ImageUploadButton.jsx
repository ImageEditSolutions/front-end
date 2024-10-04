import { useState, useRef } from 'react';

const ImageUploadButton = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  // 파일 선택 시 처리
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImage = URL.createObjectURL(file);
      onImageUpload(uploadedImage); // 부모 컴포넌트에 이미지 전달
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        이미지 업로드
      </button>
    </>
  );
};

export default ImageUploadButton;

