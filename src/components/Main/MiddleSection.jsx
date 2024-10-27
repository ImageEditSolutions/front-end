import AiImage1 from '/images/home/AiImage1.png';
import AiImage2 from '/images/home/AiImage2.png';
import AiImage3 from '/images/home/AiImage3.png';
import YArrow from '/images/home/YArrow.png';

export default function MiddleSection() {
  return (
    <>
      {/* 추가된 섹션 - 기대 이상의 놀라운 결과 */}
      <section className="py-12 px-6 bg-gray-900 text-center text-white">
        <h3 className="text-xl text-[#9DD6E9] mb-2">
          기대 이상의 놀라운 결과를 확인하세요!
        </h3>
        <div className="flex justify-center items-center mb-8">
          <img src={YArrow} alt="Arrow" className="w-30 h-9" />
        </div>
        <h2 className="text-4xl font-bold mb-4">
          흐릿한 영감, <span className='text-[#9DD6E9]'>정확한</span> AI 이미지 생성기
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          단순한 텍스트를 시각적으로 풍성한 아트워크로 변환하는 혁신적인 AI
          이미지 생성기로 상상 속에만 있던 영감을 정확하게 표현해보세요.
        </p>

        {/* 이미지 섹션 */}
        <div className="relative flex justify-center items-center">
          {/* 첫 번째 이미지 */}
          <img
            src={AiImage1}
            alt="AI Image 1"
            className="w-64 h-64 rounded-lg shadow-lg z-10 relative  mr-7"
            style={{ zIndex: 10 }}
          />
          {/* 두 번째 이미지 */}
          <img
            src={AiImage2}
            alt="AI Image 2"
            className="w-64 h-64 rounded-lg shadow-lg z-0 relative -ml-16 ml-7"
          />
          {/* 세 번째 이미지 (겹치는 이미지) */}
          <img
            src={AiImage3}
            alt="AI Image 3"
            className="w-64 h-64 rounded-lg shadow-lg absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3 z-20 mt-7"
          />
        </div>
        <p className="text-gray-400 mt-24">
          * 파란 귀걸이와 커다란 파란 눈을 가진 아름다운 여성 AI 이미지 생성
          결과
        </p>
      </section>
    </>
  );
}
