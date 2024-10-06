import { useLocation } from 'react-router-dom';
import 'tui-image-editor/dist/tui-image-editor.css';
import Header from '../components/ImageEditorComponent/Header';
import Sidebar from '../components/ImageEditorComponent/Sidebar';
import ImageEditorComponent from '../components/ImageEditorComponent/ImageEditorComponent';

const ImageEditPage = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {}; // 전달된 이미지 URL을 받음

  console.log("Received imageUrl: ", imageUrl); // 전달된 imageUrl 확인

  return (
    <div className="flex flex-col bg-black">
      <Header />
      <div className="flex flex-grow p-4 space-x-4">  {/* 이미지 에디터와 사이드바를 Flexbox로 배치 */}
        <div className="flex-1">
          <ImageEditorComponent imageUrl={imageUrl} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default ImageEditPage;
