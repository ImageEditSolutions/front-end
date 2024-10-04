import { useLocation } from 'react-router-dom';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const myTheme = {
  // 기본 테마를 확장하는 사용자 정의 테마
};

const ImageEditPage = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {}; // 전달된 이미지 URL을 받음

  return (
    <div>
      <h1>Image Editor</h1>
      {imageUrl ? (
        <ImageEditor
          includeUI={{
            loadImage: {
              path: imageUrl, // 전달받은 이미지 경로 설정
              name: 'Uploaded Image',
            },
            theme: myTheme,
            menu: ['shape', 'filter'], // 메뉴 항목 설정
            initMenu: 'filter', // 초기화 메뉴
            uiSize: {
              width: '1000px',
              height: '700px',
            },
            menuBarPosition: 'bottom', // 메뉴 바 위치
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
          }}
          usageStatistics={true} // 통계 수집 비활성화 가능
        />
      ) : (
        <p>이미지를 업로드해주세요.</p>
      )}
    </div>
  );
};

export default ImageEditPage;

