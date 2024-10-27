import { downloadProject } from '../api/edit/editApi.js';

const LoadProject = async (uploadId) => {
  const {data, error} = await downloadProject(uploadId);

  if (error) {
    alert('프로젝트를 가져오는 데 실패했습니다.');
    return;
  }

  if (data) {
    return data;
  }
}

export default LoadProject