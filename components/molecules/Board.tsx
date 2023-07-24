import React from "react";
import LetterCard from "../atoms/LetterCard";

type BoardProps = {
  wordsState: WordsState;
  colors: {
    [key: number]: string[];
  };
}

const generateBoardItem = (length: number, colors: string[], wordsState: string[]): JSX.Element[] => {
  return Array.from({ length }).map((_, index) => (
    <LetterCard customClass={`${colors[index]} rounded-hard w-20 h-20`} key={index}>
      <span className="text-sub-big text-white">
        {wordsState[index]?.toUpperCase() || ''}
      </span>
    </LetterCard>
  ));
};

const Board: React.FC<BoardProps> = ({ wordsState, colors }) => {
  const boardItems: JSX.Element[][] = [];
  for (let i = 1; i <= 5; i++) {
    boardItems.push(generateBoardItem(5, colors[i], wordsState[i]));
  }

  return (
    <section className="grid grid-cols-5 grid-rows-5 gap-3 mb-12">
      {boardItems.map((boardItem, index) => (
        <React.Fragment key={index}>
          {boardItem}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Board;
