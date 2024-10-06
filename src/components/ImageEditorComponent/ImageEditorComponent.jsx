import { default as ToastUIEditor } from '@toast-ui/react-image-editor';
import PropTypes from 'prop-types';

const myTheme = {
  // 필요한 경우 사용자 정의 테마 설정
};

const ImageEditorComponent = ({ imageUrl }) => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
      {imageUrl ? (
        <ToastUIEditor
          includeUI={{
            loadImage: {
              path: imageUrl, // 전달받은 이미지 경로
              name: 'Uploaded Image',
            },
            theme: myTheme,
            menu: ['shape', 'filter'], // 원하는 메뉴 추가
            initMenu: 'filter', // 기본 메뉴
            uiSize: {
              width: '100%', // 화면의 크기에 맞춤
              height: '600px',
            },
            menuBarPosition: 'left', // 메뉴 위치
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
          }}
          usageStatistics={true} // 통계 수집 활성화
        />
      ) : (
        <p className="text-center text-gray-500">이미지를 업로드해주세요.</p>
      )}
    </div>
  );
};

// PropTypes를 이용한 props 검증
ImageEditorComponent.propTypes = {
  imageUrl: PropTypes.string, // imageUrl은 문자열이어야 함
};

export default ImageEditorComponent;
