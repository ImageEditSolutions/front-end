import { useState } from 'react';

export default function AiImageGenerationPrompt({ onGenerateClick }) {
  const [promptText, setPromptText] = useState('');

    console.log('프롭',  onGenerateClick )

  // 입력된 텍스트 변경 처리
  const handleTextChange = (e) => {
    setPromptText(e.target.value);
  };

  // 이미지 생성 버튼 클릭 처리
  const handleGenerateClick = () => {
    if (onGenerateClick) {
      onGenerateClick(promptText); // 입력된 텍스트를 부모 컴포넌트에 전달
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md mb-6 h-full">
      <h1 className="text-lg font-bold mb-2 text-white">설명 프로필 프롬프트 작성하기</h1>

      {/* 텍스트 필드와 이미지 생성 버튼을 병렬로 배치 */}
      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          value={promptText} 
          onChange={handleTextChange} 
          placeholder="떠오르는 영감을 자유롭게 작성해 주세요" 
          className="bg-gray-800 text-white p-2 rounded-md w-3/4"
        />
        <button 
          onClick={handleGenerateClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ml-4">
          이미지 생성하기
        </button>
      </div>

      {/* 필터 옵션 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="border border-gray-500 text-white py-2 px-4 rounded">정사각형 측면</button>
        <button className="border border-gray-500 text-white py-2 px-4 rounded">색상 설정</button>
        <button className="border border-gray-500 text-white py-2 px-4 rounded">조명 설정</button>
        <button className="border border-gray-500 text-white py-2 px-4 rounded">구도 설정</button>
      </div>
    </div>
  );
};
