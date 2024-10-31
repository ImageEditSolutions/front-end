import { useLocation, useNavigate } from 'react-router-dom';
import 'tui-image-editor/dist/tui-image-editor.css';
import Header from '../components/ImageEditorComponent/Header';
import { default as ToastUIEditor } from '@toast-ui/react-image-editor';
import { useEffect, useRef, useState } from 'react';
import myTheme from '../ui/theme/myTheme.js';
import {CreateNewProject, SaveProject, LoadProject, DownloadImage, LoadImage} from '../tools'
import Modal from '../components/ImageEditorComponent/Modal.jsx';

// 이전 작업 이미지 목록 (임시로 예시 이미지 경로 사용)
const previousImages = [
  '/path/to/previous1.jpg',
  '/path/to/previous2.jpg',
  '/path/to/previous3.jpg',
];


const ImageEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = location.state || {}; // 전달된 이미지 URL을 받음

  const editorRef = useRef(null);

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [projectData, setProjectData] = useState({});
  const [imgData, setImgData] = useState(imageUrl || null);


  const handleDownloadImage = () => {
    if (editorRef.current ) {
      DownloadImage(editorRef.current.imageEditorInst);
    }
  };

  const handleCreateNewProject = () => {
    if (editorRef.current ) {
      CreateNewProject(editorRef.current.imageEditorInst);
    }
  }

  const handleSaveProject = async (id) => {
    if (editorRef.current ) {
      const res = await SaveProject(editorRef.current.imageEditorInst, id);
      if(res === "success") {
        console.log('이미지 저장 완료');
        setIsSaveModalOpen(false);
      }
    }
  }

  const handleLoadProject = async (id) => {
    const data = await LoadProject(id);

    // 프로젝트 저장하기 기능 시 사용
    console.log('project load data', data);
    setProjectData(data);

    // 이미지 불러오기 기능 시 사용
    console.log('project loaded', data.imageUrl);
    setImgData(data.imageUrl);

    await editorRef.current.imageEditorInst.loadImageFromURL(data.imageUrl, 'downloadProjectImage' );
  }

  const handleLoadImages = () => {
    if (editorRef.current ) {
      LoadImage(editorRef.current.imageEditorInst);
    }
  }

  const handleModalOpen = (type) => {
    if (type === 'save_project') {
      setIsSaveModalOpen(true);
    } else if (type === 'load_project') {
      setIsLoadModalOpen(true);
    }
  }

  // edit header 에서 사용하는 함수 정의
  const actions = {
    CREATE_NEW_PROJECT: handleCreateNewProject,
    LOAD_PROJECT: handleLoadProject,
    LOAD_IMAGE: handleLoadImages,
    DOWNLOAD_IMAGE: handleDownloadImage,
    SAVE_PROJECT: handleSaveProject,
  }

  return (
    <div className="flex flex-col bg-black h-screen w-screen">
      <div className="flex">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-11 m-5 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <Header
          actions={actions}
          handleModalOpen={handleModalOpen}
        />
      </div>
      <div className="flex flex-grow p-4 space-x-4">
        {imgData &&
          <ToastUIEditor
            ref={editorRef}
            includeUI={{
              loadImage: {
                path: imgData,
                name: 'Uploaded Image',
              },
              theme: myTheme, // 커스텀 테마 적용
              uiSize: {
                width: '100%',
                height: '100%',
              },
              menuBarPosition: 'left',
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
              cornerSize: 20,
              rotatingPointOffset: 70,
            }}
          />
        }
        {/*<PreviousImages previousImages={previousImages} />*/}
      </div>

      {
        isSaveModalOpen &&
          <Modal
            text="저장하기"
            onClose={() => setIsSaveModalOpen(false)} // 모달 닫기
            handleProject={actions.SAVE_PROJECT} // ID 저장 처리
          />
      }

      {
        isLoadModalOpen &&
        <Modal
          text="가져오기"
          onClose={() => setIsLoadModalOpen(false)} // 모달 닫기
          handleProject={actions.LOAD_PROJECT} // ID 저장 처리
        />
      }
    </div>
  );
};

export default ImageEditPage;
