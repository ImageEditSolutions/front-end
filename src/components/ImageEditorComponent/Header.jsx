import { useState } from "react";
import Modal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [uploadedId, setUploadedId] = useState(''); // 입력된 ID 저장

  // 모달에서 ID 저장 시 호출되는 함수
  const handleSaveId = (id) => {
    setUploadedId(id);
    console.log('저장된 ID:', id);
  };

  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <h1 className="text-xl font-bold">이미지 편집 화면</h1>
      <button
        onClick={() => setIsModalOpen(true)} // 버튼 클릭 시 모달 열기
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        프로젝트 저장하기
      </button>

      {/* 모달 창 */}
      <Modal
        isOpen={isModalOpen} // 모달 열림 여부
        onClose={() => setIsModalOpen(false)} // 모달 닫기
        onSubmit={handleSaveId} // ID 저장 처리
      />
    </header>
  );
};

export default Header;

  