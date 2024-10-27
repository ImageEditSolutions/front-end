const DownloadImage = (editor ) => {
  console.log('saveimage 실행');
  const dataURL = editor.toDataURL({
    format: 'png',
    quality: 1,
    multiplier: 10,
  });

  // 파일 이름 생성
  // const fileName = originalFileName.replace(/\.[^/.]+$/, "") + "-edit.png";


  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'edit.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default DownloadImage;