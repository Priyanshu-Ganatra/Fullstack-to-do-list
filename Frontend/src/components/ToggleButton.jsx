/* eslint-disable react/prop-types */
const ToggleButton = ({ isActive, text, textColor, activeColor, inactiveColor, gradientToColor }) => {
  const color = isActive ? activeColor : inactiveColor;
  const style = {
    backgroundColor: color,
    background: isActive
      ? `linear-gradient(${color}, ${color}) padding-box, linear-gradient(to right, #2EDCBD, ${gradientToColor}) border-box`
      : color,
    border: isActive ? '4px solid transparent' : '',
    borderRadius: '16px',
    boxShadow: isActive ? `0px 0px 10px ${gradientToColor}` : 'none'
  };

  return (
    <button style={style} className="w-fit h-fit p-[6px] px-4">
      <span style={{ color: textColor }} className="text-[16px] font-semibold tracking-[0%]">
        <p>{text}</p>
      </span>
    </button>
  );
};

export default ToggleButton;