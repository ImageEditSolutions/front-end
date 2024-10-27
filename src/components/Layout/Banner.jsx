import RogoImage from '/images/RogoImage.png';

export default function Banner() {
  return (
    <div className="bg-black text-white py-6">
      <div className="flex items-center gap-4 px-8">
        <img src={RogoImage} alt="Logo" className="h-10" />
        <span className="text-white text-2xl font-bold">PicShare</span>
      </div>
    </div>
  );
}
