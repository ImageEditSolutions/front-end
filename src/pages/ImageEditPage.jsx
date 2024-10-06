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
    <>
      <Header />
      <ImageEditorComponent imageUrl={imageUrl} />
      <Sidebar />
    </>
  );
};

export default ImageEditPage;
