export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
          {/* 회사 정보 */}
          <div>
            <p>상호: 모바일 앱개발 협동조합 | 대표자명: 최원석</p>
            <p>사업자 등록번호: 000-00-00000</p>
            <p>연락처: 000-000-0000 | 팩스: 000-0000-0000 | 이메일: abxde@gmail.com</p>
            <p>주소: 서울특별시 노원구 컬처스퀘어</p>
            <hr className="my-2 border-gray-600" />
            <p>Copyright ⓒ 모바일 앱개발 협동조합</p>
          </div>
  
          {/* 메뉴 */}
          <div>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  이미지 편집
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  사이트 생성
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
  
          {/* 이용 약관 */}
          <div>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  개인정보처리방침
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  