import PropTypes from 'prop-types'; // PropTypes를 import

export default function Button({ text }) {
  return (
    <button className="flex items-center bg-black w-[250px] h-[58px] pl-[20px] pr-[12px] rounded-[15px] mr-[11px]">
      <img className="w-[23px] h-[23px]" src="/src/assets/rectangle.svg" alt="rectangle" />
      <div className="flex-1 text-left ml-[12px]">{text}</div>
      <img src="/src/assets/polygon.svg" alt="polygon" />
    </button>
  );
}

// PropTypes를 이용한 props 검증
Button.propTypes = {
  text: PropTypes.string.isRequired,  // text는 반드시 문자열이어야 하며 필수 prop입니다.
};
