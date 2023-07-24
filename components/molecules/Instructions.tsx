import React, { MouseEventHandler } from "react";
import Button from "../atoms/Button";
import LetterCard from "../atoms/LetterCard";

interface InstructionsProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Instructions: React.FC<InstructionsProps> = ({ handleClick }) => {
  const example1: string[] = ['G', 'A', 'T', 'O', 'S'];
  const example2: string[] = ['V', 'O', 'C', 'A', 'L'];
  const example3: string[] = ['C', 'A', 'N', 'T', 'O'];

  return (
    <main className="flex items-center flex-col dark:text-white">
      <h2 className="w-full text-sub-big text-center mb-8">Cómo jugar</h2>
      <p className="w-full text-little-light mb-4">Adivina la palabra oculta en cinco intentos.</p>
      <p className="w-full text-little-light mb-4">Cada intento debe ser una palabra válida de 5 letras.</p>
      <p className="w-full text-little-light mb-4">Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
      <h5 className="w-full text-little-bold mb-6">Ejemplos</h5>
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
      <p className="w-full text-little-light mb-6">La letra G está en la palabra y en la posición correcta.</p>
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
      <p className="w-full text-little-light mb-6">La letra C está en la palabra pero en la posición incorrecta.</p>
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
      <p className="w-full text-little-light mb-9">La letra O no está en la palabra.</p>
      <p className="w-full text-little-light mb-8">Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
      <p className="text-center w-full text-little-light mb-8">¡Una palabra nueva cada 5 minutos!</p>
      <Button
        isDisabled={false}
        handleClick={handleClick}
        customClass="w-fit text-mid-bold text-white bg-hard-green rounded-soft py-2 px-12"
      >
        ¡JUGAR!
      </Button>
    </main>
  );
};

export default Instructions;
