import birdRight from '../../assets/bridRight.png';
import bridLeft from '../../assets/bridLeft.png';
import { NavLink } from "react-router-dom";

export default function TopSection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="flex items-center justify-center">
        {/* 텍스트 및 이미지 섹션 */}
        <div className="mr-10">
          <h1 className="text-3xl font-bold mb-4">
            당신이 머릿속으로 꿈꾸던 이미지를
          </h1>
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            현실로 만나보세요
          </h2>
          <p className="text-gray-400">현실적인 이미지를 환상해드립니다.</p>
        </div>

        {/* 이미지 섹션 */}
        <div className="relative w-64 h-64">
          <img
            src={birdRight}
            alt="Second Bird"
            className="w-48 h-48 rounded-lg shadow-lg absolute top-0 -right-20"
          />
          <img
            src={bridLeft}
            alt="First Bird"
            className="w-48 h-48 rounded-lg shadow-lg absolute bottom-0 left-0"
          />
        </div>
      </div>

      {/* 이미지 업로드 섹션 */}
      <div className="mt-20">
        {' '}
        {/* 위로부터의 간격을 추가 */}
        <h2 className="text-xl font-bold text-center mb-4">
          원하는 이미지를 넣어보세요
        </h2>
        {/* 이미지 업로드 박스 */}
        <div className="w-80 h-40 bg-gray-800 rounded-lg flex items-center justify-center mx-auto">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16l4-4m0 0l4 4m-4-4v12m13-12h-3.586l-1 1H8m0 0l1 1m3-1l4-4m0 0l4 4"
              />
            </svg>
            <p className="text-gray-400">이미지를 추가해주세요</p>
          </div>
        </div>
        {/* 버튼 섹션 */}
        <div className="mt-6 flex space-x-4 justify-center">
          <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
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
          <NavLink to="/ai-image-generation">
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
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
              AI 이미지 생성기
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
