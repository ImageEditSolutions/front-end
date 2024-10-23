import { default as ToastUIEditor } from '@toast-ui/react-image-editor';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { uploadImage } from '../../api/edit/editApi.js';
// import './ImageEdit.css';

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

const sendToServer = async () => {
  const res = await uploadImage('123');
  console.log(res);
}

const ImageEditorComponent = ({ imageUrl }) => {
  const editorRef = useRef(null);

  return (
    <div className="flex-1 flex-grow rounded-lg shadow-lg w-full h-full">
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
      <button onClick={sendToServer}> 서버에 이미지 전송 </button>
      {/*<button onClick={}> 이미지 받아오기 </button>*/}
    </div>
  );
};

// PropTypes를 이용한 props 검증
ImageEditorComponent.propTypes = {
  imageUrl: PropTypes.string, // imageUrl은 문자열이어야 함
};
export default ImageEditorComponent;