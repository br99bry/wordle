import React, { MouseEventHandler } from "react";
import Button from "../atoms/Button";
import LetterCard from "../atoms/LetterCard";
import * as language from '@/assets/constants/language/sections/Instructions'

type InstructionsProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Instructions: React.FC<InstructionsProps> = ({ handleClick }) => {
  const example1: string[] = ['G', 'A', 'T', 'O', 'S'];
  const example2: string[] = ['V', 'O', 'C', 'A', 'L'];
  const example3: string[] = ['C', 'A', 'N', 'T', 'O'];

  return (
    <main className="flex items-center flex-col dark:text-white">
      <h2 className="w-full text-sub-big text-center mb-8">{language.TEXT1}</h2>
      <p className="w-full text-little-light mb-4">{language.TEXT2}</p>
      <p className="w-full text-little-light mb-4">{language.TEXT3}</p>
      <p className="w-full text-little-light mb-4">{language.TEXT4}</p>
      <h5 className="w-full text-little-bold mb-6">{language.TEXT5}</h5>
      <div className="flex gap-3 w-full justify-center mb-2">
        {example1.map((item, index) => (
          <LetterCard
            customClass={`${index === 0 ? 'bg-hard-green border-hard-green' : 'border-black dark:border-hard-gray'
              } rounded-hard w-box-76 h-box-76 border `}
            key={index}
          >
            <span className="text-sub-big text-black dark:text-white">{item}</span>
          </LetterCard>
        ))}
      </div>
      <p className="w-full text-little-light mb-6">{language.TEXT6}</p>
      <div className="flex gap-3 w-full justify-center mb-2">
        {example2.map((item, index) => (
          <LetterCard
            customClass={`${index === 2 ? 'bg-hard-yellow border-hard-yellow' : 'border-black dark:border-hard-gray'
              } rounded-hard w-box-76 h-box-76 border`}
            key={index}
          >
            <span className="text-sub-big text-black dark:text-white">{item}</span>
          </LetterCard>
        ))}
      </div>
      <p className="w-full text-little-light mb-6">{language.TEXT7}</p>
      <div className="flex gap-3 w-full justify-center mb-2">
        {example3.map((item, index) => (
          <LetterCard
            customClass={`${index === 4 ? 'bg-hard-gray border-hard-gray' : 'border-black dark:border-hard-gray'
              } rounded-hard w-box-76 h-box-76 border`}
            key={index}
          >
            <span className="text-sub-big text-black dark:text-white">{item}</span>
          </LetterCard>
        ))}
      </div>
      <p className="w-full text-little-light mb-9">{language.TEXT8}</p>
      <p className="w-full text-little-light mb-8">{language.TEXT9}</p>
      <p className="text-center w-full text-little-light mb-8">{language.TEXT10}</p>
      <Button
        isDisabled={false}
        handleClick={handleClick}
        customClass="w-fit text-mid-bold text-white bg-hard-green rounded-soft py-2 px-12 cursor-pointer"
      >
        {language.TEXT11}
      </Button>
    </main>
  );
};

export default Instructions;
