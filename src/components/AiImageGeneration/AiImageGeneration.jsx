import { useState, useEffect } from "react";
import PurpleGirl from '../../assets/PurpleGirl.png';
import OverlappedGirl from '../../assets/OverlappedGirl.png';
import HeadphoneGirl from '../../assets/HeadphoneGirl.png';
import Cat from '../../assets/Cat.png';
import Dragon from '../../assets/Dragon.png';

// 랜덤 이미지 섹션 컴포넌트
const RandomImageSection = () => {
  // 에셋 폴더에 있는 이미지 경로들
  const imagePaths = [
    PurpleGirl,
    OverlappedGirl,
    HeadphoneGirl,
    Dragon,
    Cat,
  ];

  const [randomImages, setRandomImages] = useState([]);

  // 랜덤 이미지 배열을 생성하는 함수
  const getRandomImages = () => {
    const shuffledImages = [...imagePaths].sort(() => 0.5 - Math.random());
    return shuffledImages.slice(0, 4); // 필요한 이미지 개수만 선택
  };

  // 컴포넌트가 마운트될 때 랜덤 이미지를 설정
  useEffect(() => {
    setRandomImages(getRandomImages());
  }, []);

  return (
    <section className="bg-black">
      <h2 className="text-xl font-bold mb-4 text-white">생성된 이미지</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {randomImages.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Generated Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default RandomImageSection;
