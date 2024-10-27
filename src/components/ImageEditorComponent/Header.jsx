const   Header = ({ actions, handleModalOpen }) => {

  return (
    <header className="bg-edit-gray text-white p-4 text-center flex gap-7 m-center rounded-bl-3xl px-8 h-14">
      <button className="flex h-full gap-2" onClick={actions.CREATE_NEW_PROJECT}>
        <img className="h-full object-cover" src="src/assets/edit/new.png" alt="newProject" />
        <p>새로운 프로젝트</p>
      </button>
      <button className="flex h-full gap-2" onClick={actions.LOAD_IMAGE}>
        <img className="h-full object-cover" src="src/assets/edit/loadEditableImg.png" alt="loadEditableImg" />
        <p>편집할 이미지 가져오기</p>
      </button>
      <button className="flex h-full gap-2" onClick={actions.DOWNLOAD_IMAGE}>
        <img className="h-full object-cover" src="../../../public/images/edit/download.png" alt="download" />
        <p>이미지 다운로드</p>
      </button>
      <button className="flex h-full gap-2" onClick={() => handleModalOpen('save_project')}>
        <img className="h-full object-cover" src="../../../public/images/edit/save.png" alt="save" />
        <p>프로젝트 저장하기</p>
      </button>
      <button className="flex h-full gap-2" onClick={() => {handleModalOpen('load_project')}}>
        <img className="h-full object-cover" src="../../../public/images/edit/loadProject.png" alt="loadProject" />
        <p>프로젝트 가져오기</p>
      </button>
    </header>
  );
};

export default Header;

  