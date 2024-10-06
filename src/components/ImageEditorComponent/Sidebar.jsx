const Sidebar = () => {
  return (
    <aside className="w-72 bg-gray-900 text-white rounded-lg shadow-lg p-4 flex flex-col">
      {/* 추천 이미지 제목 및 설명 */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">생성된 이미지 추천</h2>
        <p className="text-gray-400 text-sm">
          사진과 유사한 생성된 이미지를 추천합니다.
        </p>
      </div>

      {/* 이미지 목록 */}
      <div className="space-y-4 flex-grow overflow-y-auto">
        <img
          src="/path/to/image1.jpg"
          alt="추천 이미지 1"
          className="w-full h-36 object-cover rounded-lg"
        />
        <img
          src="/path/to/image2.jpg"
          alt="추천 이미지 2"
          className="w-full h-36 object-cover rounded-lg"
        />
        <img
          src="/path/to/image3.jpg"
          alt="추천 이미지 3"
          className="w-full h-36 object-cover rounded-lg"
        />
      </div>

      {/* 버튼 섹션 */}
      <div className="mt-6">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          생성 프로젝트 보기
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
