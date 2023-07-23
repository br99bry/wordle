import React, { ReactNode } from "react";

interface LetterCardProps {
  children: ReactNode;
  customClass: string;
}

const LetterCard: React.FC<LetterCardProps> = ({ children, customClass }) => (
  <div className={`flex justify-center items-center ${customClass}`}>
    <p className="text-center">{children}</p>
  </div>
);

export default LetterCard;
