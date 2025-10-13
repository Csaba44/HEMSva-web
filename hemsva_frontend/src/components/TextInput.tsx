import React from "react";

type TextInputParams = {
  text: string;
  errorMessage?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  addClass?: string;
  textClass?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({
  text,
  errorMessage = "",
  placeholder = "",
  type = "text",
  required = true,
  addClass = "",
  textClass = "",
  value,
  onChange,
}: TextInputParams) {
  const baseClass = "flex bg-lightest gap-2 items-center text-nowrap py-2 px-3 border-1 border-darkest rounded-[5px]";
  return (
    <div className="flex flex-col gap-1">
      <div className={`${baseClass} ${addClass}`}>
        <span className={textClass}>
          {text}
          {required && <span className="text-hemsred">*</span>}
        </span>
        <span className="w-[1px] bg-black h-5"></span>
        <input type={type} placeholder={placeholder} className="outline-none flex-1" required={required} value={value} onChange={onChange} />
      </div>
      {errorMessage && <p className="text-hemsred text-sm">{errorMessage}</p>}
    </div>
  );
}

export default TextInput;
