import axios from 'axios';
const API_SERVER_URL = import.meta.env.VITE_API_SERVER_URL;

// 사용자별 이미지 API
export const fetchImages = async (uploadId) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_SERVER_URL}/api/download`,
    })

    return response.data;
  } catch (error) {
    console.error("Error fetching image", error);
  }
};

export const uploadImage = async (uploadId, multipartFile) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_SERVER_URL}/api/upload`,
      data: {
        uploadId,
        multipartFile
      }
    })
  } catch (error) {
    console.error("Error uploading image", error);
  }
}