
import { useRef } from 'react';

const   Header = ({ actions, handleModalOpen }) => {
  const fileInputRef = useRef(null);

  const handleClickFetchImage = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImage = URL.createObjectURL(file);
      actions.LOAD_IMAGE(uploadedImage);
    }
  }

  return (
    <header className="bg-edit-gray text-white p-4 text-center flex gap-7 m-center rounded-bl-3xl px-8 h-14">
      {/*<button className="flex h-full gap-2" onClick={actions.CREATE_NEW_PROJECT}>*/}
      {/*  <img className="h-full object-cover" src="/images/edit/new.png" alt="newProject" />*/}
      {/*  <p>새로운 프로젝트</p>*/}
      {/*</button>*/}
      <button className="flex h-full gap-2" onClick={handleClickFetchImage}>
        <img className="h-full object-cover" src="/images/edit/loadEditableImg.png" alt="loadEditableImg" />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <p>편집할 이미지 가져오기</p>
      </button>
      <button className="flex h-full gap-2" onClick={actions.DOWNLOAD_IMAGE}>
        <img className="h-full object-cover" src="/images/edit/download.png" alt="download" />
        <p>이미지 다운로드</p>
      </button>
      <button className="flex h-full gap-2" onClick={() => handleModalOpen('save_project')}>
        <img className="h-full object-cover" src="/images/edit/save.png" alt="save" />
        <p>프로젝트 저장하기</p>
      </button>
      <button className="flex h-full gap-2" onClick={() => {handleModalOpen('load_project')}}>
        <img className="h-full object-cover" src="/images/edit/loadProject.png" alt="loadProject" />
        <p>프로젝트 가져오기</p>
      </button>
    </header>
  );
};

export default Header;

  