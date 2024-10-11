import axios from 'axios';
export const API_SERVER_URL = import.meta.env.API_SERVER_URL;

// AI 관련 API
export const requestAIImageGeneration = async (prompt) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_SERVER_URL}/api/ai/upload`,
      data: {
        prompt,
      },
    })

    return response.data;
  } catch (error) {
    console.error("Error creating AI image", error);
  }
};

export const fetchGeneratedAIImage = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `&{API_SERVER_URL}/api/ai/images/${id}`,
    })

    return response.data;
  } catch (error) {
    console.error("Error fetching AI image", error);
  }
};

// 사용자별 이미지 API
export const fetchImages = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `&{API_SERVER_URL}/api/images/${userId}`,
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