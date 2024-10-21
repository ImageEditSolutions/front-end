import axios from 'axios';
const API_SERVER_URL = import.meta.env.VITE_API_SERVER_URL;

// 사용자별 이미지 API
export const fetchImages = async () => {
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

export const uploadImage = async (img_data, userID) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_SERVER_URL}/api/upload`,
      data: {
        img_data,
        userID
      }
    })
  } catch (error) {
    console.error("Error uploading image", error);
  }
}