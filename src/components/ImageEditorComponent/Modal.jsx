import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  // 모달이 닫힐 때 입력 상태를 초기화
  useEffect(() => {
    if (!isOpen) {
      setInputValue(''); // 모달이 닫히면 inputValue 초기화
    }
  }, [isOpen]);

  if (!isOpen) return null; // 모달이 열리지 않은 경우 렌더링 하지 않음

  const handleSubmit = () => {
    onSubmit(inputValue); // 입력된 값을 부모 컴포넌트로 전달
    onClose(); // 모달 닫기
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl w-full min-h-[300px] flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center flex-grow">
          <h2 className="text-xl text-blue-200 mb-4">업로드 ID를 입력해주세요.</h2>
          <input
            type="text"
            placeholder="ID를 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`w-full p-3 mb-4 text-white bg-transparent border-2 rounded-lg focus:outline-none focus:border-blue-300 transition-colors duration-300 ${inputValue ? 'font-bold' : ''}`}
          />
        </div>
        {/* 구분선 추가 */}
        <div className="border-t border-gray-600 my-4"></div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="w-1/2 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none mr-2 transition duration-300"
          >
            저장하기
          </button>
          <button
            onClick={onClose}
            className="w-1/2 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none transition duration-300 border-l border-white"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // 모달이 열려 있는지 여부
  onClose: PropTypes.func.isRequired, // 모달을 닫는 함수
  onSubmit: PropTypes.func.isRequired, // 입력 값을 제출하는 함수
};

export default Modal;






