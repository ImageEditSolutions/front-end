import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';


const myTheme = {
  // 기본 테마를 확장하는 사용자 정의 테마
};

const ImageEditPage = () => (
  <div>
    <h1>Image Editor</h1>
    <ImageEditor
      includeUI={{
        loadImage: {
          path: 'img/sampleImage.jpg', // 기본으로 로드할 이미지 경로
          name: 'SampleImage',
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
  </div>
);

export default ImageEditPage;
