import Button from './Button.jsx';
import { useState, useRef } from 'react';

export default function TextToImagePanel({submitPrompt}) {
  const [isInputFilled, setIsInputFilled] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const isFilled = !!event.target.value;
    if (!isFilled) {
      setIsInputFilled(false);
    } else {
      if (isFilled !== isInputFilled) {
        setIsInputFilled(true);
      }
    }
    inputRef.current = event.target.value;
  }

  const handleClick = () => {
    if (!isInputFilled) {
      alert("내용을 입력해주세요.");
    };

    submitPrompt(inputRef.current);
  }

  return (
    <>
      <section className="text-white mx-40">
        <h1 className="text-2xl mb-[42px] mt-6">설명 프롬프트 작성하기</h1>
        <div className={`${isInputFilled ? 'h-[286px]' : 'h-[73px]'} bg-gray-800 rounded-lg flex justify-between w-auto px-5 mb-[23px] flex-initial`}>
          <img className="inline w-[27px] h-[27px] mt-[22px] flex-initial" src="/src/assets/prompt-img.svg" alt="prompt-img" />
          <textarea ref={inputRef} onChange={handleChange} className="flex-1 h-[73px] w-max bg-gray-800 resize-none py-[22px] mx-[27px] outline-0" placeholder="떠오른 영감을 자유롭게 작성해주세요."></textarea>
          <button onClick={handleClick} className="flex-initial text-neutral-950 bg-blue-200 rounded-2xl min-w-48 w-1/6 h-[50px] px-7 py-3 my-auto">
            이미지 생성하기
            <img className="inline pl-1 w-max h-max" src="/src/assets/checkmark.svg" alt="checkmark" />
          </button>
        </div>
        <div className="flex">
          <Button text="정사각형 측면" />
          <Button text="색상 설정" />
          <Button text="조명 설정" />
          <Button text="구도 설정" />
        </div>
      </section>
    </>
  )
}