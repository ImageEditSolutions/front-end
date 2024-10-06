export default function Button({ text }) {


  return (
    <button className="flex items-center bg-black w-[250px] h-[58px] pl-[20px] pr-[12px] rounded-[15px] mr-[11px]">
      <img className="w-[23px] h-[23px]" src="/src/assets/rectangle.svg" alt="rectangle" />
      <div className="flex-1 text-left ml-[12px]">{text}</div>
      <img src="/src/assets/polygon.svg" alt="polygon" />
    </button>
  )
}