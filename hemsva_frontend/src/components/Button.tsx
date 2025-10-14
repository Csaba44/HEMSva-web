type ButtonParams = {
  text: string;
  onClick?: () => void;
  active?: boolean;
  addClass?: string;
};

function emptyFunction() {}

function Button({ text, onClick = emptyFunction, active = false, addClass = "" }: ButtonParams) {
  const baseClass =
    "outline-none cursor-pointer border-2 border-darkest py-[6px] px-4 rounded-[5px] text-darkest font-medium hover:bg-darkest hover:text-white transition-all duration-200 ease-in-out";
  const activeClass = active ? "bg-darkest text-lightest" : "";

  return (
    <button onClick={onClick} className={`${baseClass} ${activeClass} ${addClass}`}>
      {text.toUpperCase()}
    </button>
  );
}

export default Button;
