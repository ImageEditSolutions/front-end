import { uploadImage } from '../api/edit/editApi.js';

const SaveProject = async (editor, uploadId) => {
  const imgUrl = editor.toDataURL({
    format: 'image/png',
    quality: 1,
  });

  // base64 데이터를 Blob으로 변환
  const blob = await (await fetch(imgUrl)).blob();

  return await uploadImage(uploadId, blob);
}

export default SaveProject