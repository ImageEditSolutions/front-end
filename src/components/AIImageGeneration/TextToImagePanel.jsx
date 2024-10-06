import Button from './Button.jsx';

export default function TextToImagePanel() {
  
  return (
    <>
      <section className="text-white mx-40 h-[331px]">
        <h1 className="text-2xl mb-[42px] mt-6">설명 프롬프트 작성하기</h1>
        <div className="bg-gray-800 rounded-lg flex items-center justify-between w-auto h-[73px] px-5 mb-[23px] flex-initial">
          <img className="inline w-[27px] h-[27px] flex-initial" src="/src/assets/prompt-img.svg" alt="prompt-img" />
          <textarea className="flex-1 h-[73px] w-max bg-gray-800 resize-none py-[23px] mx-[27px] outline-0" placeholder="떠오른 영감을 자유롭게 작성해주세요."></textarea>
          <button className="flex-initial text-neutral-950 bg-blue-200 rounded-2xl min-w-48 w-1/6 h-[50px] px-7 py-3">
            이미지 생성하기
            <img className="inline pl-1 w-max h-max" src="/src/assets/checkmark.svg" alt="checkmark" />
          </button>
        </div>
        <div className="flex">
          <Button text={"정사각형 측면"} />
          <Button text={"색상 설정"} />
          <Button text={"조명 설정"} />
          <Button text={"구도 설정"} />
        </div>
      </section>
    </>
  )
}