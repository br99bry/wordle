import React, { useRef, MouseEvent } from "react";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  customClass?: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  customClass,
  isDisabled,
}) => {
  const button = useRef<HTMLButtonElement>(null);

  const handleIntermediateClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (button.current) {
      button.current.blur();
    }
    handleClick(e);
  };

  return (
    <button
      disabled={isDisabled}
      className={customClass}
      onClick={handleIntermediateClick}
      ref={button}
    >
      {children}
    </button>
  );
};

export default Button;
