import React, {
  FC,
  ReactElement,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useRef,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  label: string;
  fiat?: boolean;
}
const Input: FC<InputProps> = ({ type, label, fiat }): ReactElement => {
  const inputRef = useRef(null);
  const inputId = crypto.randomUUID();
  return (
    <div className="input-container">
      <label htmlFor={inputId} className="input-label">
        {label}
      </label>
      <input
        id={inputId}
        ref={inputRef}
        type={type}
        placeholder={`${fiat ? '$' : ''}0.0`}
        className="input"
      />
    </div>
  );
};

export default Input;
