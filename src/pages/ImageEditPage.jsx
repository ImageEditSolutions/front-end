import { useLocation } from 'react-router-dom';
import 'tui-image-editor/dist/tui-image-editor.css';
import Header from '../components/ImageEditorComponent/Header';
import ImageEditorComponent from '../components/ImageEditorComponent/ImageEditorComponent';
import PreviousImages from '../components/ImageEditorComponent/PreviousImages.jsx';

const ImageEditPage = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {}; // 전달된 이미지 URL을 받음

  // 이전 작업 이미지 목록 (임시로 예시 이미지 경로 사용)
  const previousImages = [
    '/path/to/previous1.jpg',
    '/path/to/previous2.jpg',
    '/path/to/previous3.jpg',
  ];

  return (
    <div className="flex flex-col bg-black h-screen w-screen">
      <Header />
      <div className="flex flex-grow p-4 space-x-4">
        <div className="flex-1">
          <ImageEditorComponent imageUrl={imageUrl} />
        </div>
        <PreviousImages previousImages={previousImages} />
      </div>
    </div>
  );
};

export default ImageEditPage;
