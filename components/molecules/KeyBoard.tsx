import React, { MouseEventHandler } from "react";
import Button from "../atoms/Button";
import LetterCard from "../atoms/LetterCard";
import BackIcon from "../atoms/icons/BackIcon";

interface KeyBoardProps {
  handleKeyClick: MouseEventHandler<HTMLButtonElement>;
}

const KeyBoard: React.FC<KeyBoardProps> = ({ handleKeyClick }) => {
  const keysRowOne: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keysRowTwo: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  const keysRowThree: string[] = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Borrar'];

  return (
    <section className="w-full bg-sub-soft-gray p-5 rounded-hard flex flex-col items-start">
      <div className="flex justify-center items-center gap-2 mb-3 ml-11">
        {keysRowOne.map((item) => (
          <LetterCard
            customClass="bg-sub-mid-gray rounded-soft w-fit h-fit px-3 py-1.5 text-little text-low-gray min-w-key-board min-h-key-board"
            key={item}
          >
            <Button handleClick={handleKeyClick}>{item}</Button>
          </LetterCard>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mb-3 ml-16">
        {keysRowTwo.map((item) => (
          <LetterCard
            customClass="bg-sub-mid-gray rounded-soft w-fit h-fit px-3 py-1.5 text-little text-low-gray min-w-key-board min-h-key-board"
            key={item}
          >
            <Button handleClick={handleKeyClick}>{item}</Button>
          </LetterCard>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mb-3 ml-6">
        {keysRowThree.map((item) => (
          <LetterCard
            customClass="bg-sub-mid-gray rounded-soft w-fit h-fit px-3 py-1.5 text-little text-low-gray min-w-key-board min-h-key-board"
            key={item}
          >
            <Button handleClick={handleKeyClick}>{item === 'Borrar' ? <BackIcon /> : item}</Button>
          </LetterCard>
        ))}
      </div>
    </section>
  );
};

export default KeyBoard;
