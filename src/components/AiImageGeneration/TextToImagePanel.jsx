import PropTypes from 'prop-types'; // PropTypes를 import
import { useState, useRef } from 'react';

export default function TextToImagePanel({ submitPrompt }) {
  const [isInputFilled, setIsInputFilled] = useState(false);
  const [borderColor, setBorderColor] = useState(''); // 테두리 색상 상태
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const isFilled = !!inputValue;
    setIsInputFilled(isFilled);
    inputRef.current = inputValue;

    // 한글이 입력되면 하늘색 테두리, 영어가 입력되면 연한 붉은색 테두리
    if (/^[가-힣\s]+$/.test(inputValue)) {
      setBorderColor('border-sky-400'); // 한글일 경우 하늘색
    } else if (/^[a-zA-Z\s]+$/.test(inputValue)) {
      setBorderColor('border-red-300'); // 영어일 경우 연한 붉은색
    } else {
      setBorderColor(''); // 조건에 맞지 않으면 테두리 없음
    }
  };

  const handleClick = () => {
    if (!isInputFilled) {
      alert("내용을 입력해주세요.");
      return;
    }
    submitPrompt(inputRef.current);
  };

  return (
    <section className="text-white">
      <h1 className="text-2xl mb-[42px] mt-6">설명 프롬프트 작성하기</h1>
      <div className={`${isInputFilled ? 'h-[286px]' : 'h-[73px]'} bg-gray-800 rounded-lg flex justify-between w-auto px-5 mb-[23px] flex-initial`}>
        <img className="inline w-[27px] h-[27px] mt-[22px] flex-initial" src="/images/ai/prompt-img.svg" alt="prompt-img" />
        
        {/* 텍스트 에리어에 동적 테두리 클래스 적용 */}
        <textarea
          ref={inputRef}
          onChange={handleChange}
          className={`flex-1 h-[73px] w-max bg-gray-800 resize-none py-[22px] mx-[27px] outline-0 rounded-lg border ${borderColor}`}
          placeholder="떠오른 영감을 자유롭게 작성해주세요."
        ></textarea>
        
        <button onClick={handleClick} className="flex-initial flex items-center justify-between text-neutral-950 bg-blue-200 rounded-2xl min-w-48 w-1/6 h-[50px] px-7 py-3 my-auto">
          <span>이미지 생성하기</span>
          <img className="inline w-[20px] h-[20px] ml-2" src="/images/ai/checkmark.svg" alt="checkmark" /> {/* 체크마크를 오른쪽에 배치 */}
        </button>
      </div>
    </section>
  );
}

// PropTypes를 이용한 props 검증
TextToImagePanel.propTypes = {
  submitPrompt: PropTypes.func.isRequired, // submitPrompt는 반드시 함수여야 하며 필수 prop입니다.
};

