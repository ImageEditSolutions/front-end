import { default as ToastUIEditor } from '@toast-ui/react-image-editor';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import './ImageEdit.css';

const myTheme = {
  'common.bi.image': '',
  'common.bisize.width': '0px',
  'common.bisize.height': '0px',
  'common.backgroundColor': '#000000', // 배경색을 검은색으로 유지
  'common.border': '0px',

  // 메뉴의 텍스트 색상과 폰트 스타일
  'menu.normalIcon.color': '#FFFFFF',
  'menu.activeIcon.color': '#FFFFFF',
  'menu.disabledIcon.color': '#434343',
  'menu.hoverIcon.color': '#FF0000',
  'menu.normalLabel.color': '#FFFFFF', // 하얀색 텍스트
  'menu.normalLabel.fontWeight': 'bold', // 볼드체
  'menu.activeLabel.color': '#FFFFFF',
  'menu.activeLabel.fontWeight': 'bold', // 볼드체

  // 서브 메뉴 스타일
  'submenu.backgroundColor': '#000000',
  'submenu.partition.color': '#858585',
  'submenu.normalIcon.color': '#FFFFFF',
  'submenu.activeIcon.color': '#FFFFFF',
  'submenu.disabledIcon.color': '#434343',
  'submenu.hoverIcon.color': '#FF0000',
  'submenu.normalLabel.color': '#FFFFFF', // 하얀색 텍스트
  'submenu.normalLabel.fontWeight': 'bold', // 볼드체
  'submenu.activeLabel.color': '#FFFFFF',
  'submenu.activeLabel.fontWeight': 'bold', // 볼드체
};

const ImageEditorComponent = ({ imageUrl }) => {
  const editorRef = useRef(null);

  const handleSaveImage = () => {
    const editorInstance = editorRef.current.getInstance();
    const dataURL = editorInstance.toDataURL();

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'edited-image.png'; 
    link.click();
  };

  const handleLoadImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const editorInstance = editorRef.current.getInstance();
        editorInstance.loadImageFromURL(reader.result, 'Uploaded Image').then(() => {
          console.log('이미지 불러오기 완료');
        });
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  return (
    <div className="flex-1 flex-grow rounded-lg shadow-lg p-4 h-full">
      {imageUrl ? (
        <>
          <ToastUIEditor
            ref={editorRef}
            includeUI={{
              loadImage: {
                path: imageUrl,
                name: 'Uploaded Image',
              },
              theme: myTheme, // 커스텀 테마 적용
              menu: ['shape', 'filter'],
              initMenu: 'filter',
              uiSize: {
                width: '100%',
                height: '100%',
              },
              menuBarPosition: 'left',
              toolbarItems: [
                {
                  type: 'button',
                  options: {
                    name: '이미지 불러오기',
                    className: 'tui-load-button',
                    icon: 'https://cdn-icons-png.flaticon.com/512/1829/1829543.png', // 불러오기 아이콘
                    style: 'background-color: #FFFFFF;', // 배경색을 하얀색으로 설정
                    onClick: handleLoadImage,
                  },
                },
                {
                  type: 'button',
                  options: {
                    name: '저장',
                    className: 'tui-save-button',
                    icon: 'https://cdn-icons-png.flaticon.com/512/786/786205.png', // 저장 아이콘
                    style: 'background-color: #FFFFFF;', // 배경색을 하얀색으로 설정
                    onClick: handleSaveImage,
                  },
                },
              ],
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
              cornerSize: 20,
              rotatingPointOffset: 70,
            }}
            usageStatistics={true}
          />
        </>
      ) : (
        <p className="text-center text-gray-500">이미지를 업로드해주세요.</p>
      )}
    </div>
  );
};

// PropTypes를 이용한 props 검증
ImageEditorComponent.propTypes = {
  imageUrl: PropTypes.string,
};

export default ImageEditorComponent;

