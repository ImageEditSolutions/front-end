import axios from 'axios';
const API_SERVER_URL = import.meta.env.VITE_API_SERVER_URL;

// 프로젝트 가져오기
export const downloadProject = async (uploadId) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `http://${API_SERVER_URL}/api/download`,
      params: {
        uploadId: uploadId
      },
    })

    return response;
  } catch (error) {
    console.error("Error fetching image", error);
  }
};

// 프로젝트 업로드 하기
export const uploadImage = async (uploadId, blob) => {
  const formData = new FormData();
  formData.append('uploadId', uploadId);
  formData.append('multipartFile', blob, 'image.png');

  try {
    const response = await axios({
      method: 'POST',
      url: `http://${API_SERVER_URL}/api/upload`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })

    if (response.status === 200) {
      return 'success';
    }
  } catch (error) {

    if(error.status === 409) {
      console.log('다른 아이디를 입력해주세요.');
    } else if(error.status === 400) {
      console.log(error.message);
    } else if(error.status === 500) {
      console.log(error.message);
    } else {
      console.error("Error uploading image", error);
    }
  }
}
