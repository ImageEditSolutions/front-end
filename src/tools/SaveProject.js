import { uploadImage } from '../api/edit/editApi.js';

const SaveProject = async (editor, uploadId) => {
  const imgUrl = editor.toDataURL({
    format: 'image/png',
    quality: 1,
  });

  // base64 데이터를 Blob으로 변환
  const blob = await (await fetch(imgUrl)).blob();

  const { data, error } = await uploadImage(uploadId, blob);

  if (error && error.status === 409) {
    alert('다른 아이디를 입력해주세요.');
    return;
  }

  if(data && data.status === 200) {
    alert('프로젝특가 성공적으로 업로드 되었습니다.');
    return 'success';
  }
}

export default SaveProject