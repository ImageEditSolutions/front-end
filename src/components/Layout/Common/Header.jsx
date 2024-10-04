import RogoImage from '../../../assets/RogoImage.png';


export default function Header() {
  return (
    <header
      className="w-full h-[136px] bg-black flex items-center justify-between px-8"
      style={{padding:"0 15%"}} // 임시 수정.
    >
      {/* 로고와 텍스트 부분 */}
      <div className="flex items-center gap-2">
          <img src={RogoImage} alt="Logo" className="h-10" />
          <span className="text-white text-2xl font-bold">PicShare</span>
      </div>

      <nav className="flex items-center gap-8 text-white">
        <a href="#소개" className="hover:text-gray-400">
          소개
        </a>
        <a href="#자주묻는질문" className="hover:text-gray-400">
          자주묻는 질문
        </a>
        <a href="#문의" className="hover:text-gray-400">
          문의
        </a>
        <a
          href="#로그인"
          className="border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
        >
          로그인
        </a>
      </nav>
    </header>
  );
}
