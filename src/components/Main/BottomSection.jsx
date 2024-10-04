import Cat from '../../assets/Cat.png';
import Dragon from '../../assets/Dragon.png';
import HeadphoneGirl from '../../assets/HeadphoneGirl.png';
import Icecream from '../../assets/Icecream.png';
import Menu1 from '../../assets/Menu1.png';
import Menu2 from '../../assets/Menu2.png';
import OverlappedGirl from '../../assets/OverlappedGirl.png';
import PurpleGirl from '../../assets/PurpleGirl.png';
import TwoBoy from '../../assets/TwoBoy.png';
import TwoGirl from '../../assets/TwoGirl.png';
import XArrow from '../../assets/XArrow.png';

export default function BottomSection() {
  return (
    <div className=" bg-black text-white py-12">
      {/* 섹션 1 */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          영감을 <span className="text-[#9DD6E9]">확장</span>하는 AI
          제네레이티브 채우기
        </h2>
        <p className="mb-8">
          번역 대체로 아이디어에 새로운 환경을 만들어보세요. 색감과 배경
          수정까지 지체된 창작력을 더 대담하게 내가 원하는 것으로 만들게
          도와줍니다.
        </p>
        <div className="flex justify-center items-center">
          <img src={TwoGirl} alt="Before" className="w-72 rounded-md " />
          <img src={XArrow} alt="XArrow" className='w-30' />
          <img src={TwoBoy} alt="After" className="w-72 rounded-md" />
        </div>
        <p className="mt-4">
          한복 앞에 서있는 두명의 여성을 두 명의 연인으로 바꾸고 싶어!
        </p>
      </div>

      {/* 섹션 2 - 이미지 섹션과 텍스트 섹션을 병렬 배치 */}
      <div className="flex justify-center gap-4">
        {/* 이미지 섹션 */}
        <div className="flex flex-col gap-2">
          <img
            src={Cat}
            alt="Cat"
            className="w-40 h-80 object-cover rounded-md"
          />
          <img
            src={Dragon}
            alt="Dragon"
            className="w-40 h-40 object-cover rounded-md"
          />
          <img
            src={OverlappedGirl}
            alt="Overlapped Girl"
            className="w-40 h-40 object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <img
            src={Icecream}
            alt="Icecream"
            className="w-40 h-40 object-cover rounded-md"
          />
          <img
            src={HeadphoneGirl}
            alt="Headphone Girl"
            className="w-40 h-40 object-cover rounded-md"
          />
          <img
            src={PurpleGirl}
            alt="Purple Girl"
            className="w-40 h-80 object-cover rounded-md"
          />
        </div>

        {/* 텍스트 섹션 */}
        <div className="flex justify-center">
          <div className="text-left w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              다양한 스타일로 구현하는{' '}
              <div className="text-[#9DD6E9]">뚜렷한 머릿속 이미지</div>
            </h3>
            <p className="mb-8">
              2D, 3D, 실사, 벡터 이미지 등도 내 아이디어에 다양한 스타일을
              지원합니다.
            </p>
          <div className="relative">
            {/* 메뉴 1 */}
            <img
              src={Menu1}
              alt="Menu 1"
              className="w-72 h-auto object-cover rounded-md mb-4 relative"
            />
            {/* 메뉴 2 겹치도록 설정 */}
            <img
              src={Menu2}
              alt="Menu 2"
              className="w-64 h-auto object-cover rounded-md absolute top-12 left-4"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
