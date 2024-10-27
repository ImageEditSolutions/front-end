import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Modal = ({ onClose, handleProject, text }) => {
  const [inputValue, setInputValue] = useState('');

  const handleCloseModal = () => {
    setInputValue(''); // 모달이 닫히면 inputValue 초기화
    onClose();
  }

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
            onClick={() => handleProject(inputValue)}
            className="w-1/2 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none mr-2 transition duration-300"
          >
            {text}
          </button>
          <button
            onClick={handleCloseModal}
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
  onClose: PropTypes.func.isRequired, // 모달을 닫는 함수
  handleProject: PropTypes.func.isRequired, // 입력 값을 제출하는 함수
};

export default Modal;






