import React from "react";
import LetterCard from "../atoms/LetterCard";
type BoardProps = {
  wordsState: WordsState;
  colors: {
    [key: number]: string[];
  };
}

const Board: React.FC<BoardProps> = ({ wordsState, colors }) => {
  const boardItem1 = Array.from({ length: 5 });
  const boardItem2 = Array.from({ length: 5 });
  const boardItem3 = Array.from({ length: 5 });
  const boardItem4 = Array.from({ length: 5 });
  const boardItem5 = Array.from({ length: 5 });

  const itemList1 = boardItem1.map((_, index) => (
    <LetterCard customClass={`${colors['1'][index]} rounded-hard w-20 h-20`} key={index}>
      <span className="text-sub-big text-white">
        {wordsState['1'][index]?.toUpperCase() || ''}
      </span>
    </LetterCard>
  ));

  const itemList2 = boardItem2.map((_, index) => (
    <LetterCard customClass={`${colors['2'][index]} rounded-hard w-20 h-20`} key={index}>
      <span className="text-sub-big text-white">
        {wordsState['2'][index]?.toUpperCase() || ''}
      </span>
    </LetterCard>
  ));

  const itemList3 = boardItem3.map((_, index) => (
    <LetterCard customClass={`${colors['3'][index]} rounded-hard w-20 h-20`} key={index}>
      <span className="text-sub-big text-white">
        {wordsState['3'][index]?.toUpperCase() || ''}
      </span>
    </LetterCard>
  ));

  const itemList4 = boardItem4.map((_, index) => (
    <LetterCard customClass={`${colors['4'][index]} rounded-hard w-20 h-20`} key={index}>
      <span className="text-sub-big text-white">
        {wordsState['4'][index]?.toUpperCase() || ''}
      </span>
    </LetterCard>
  ));

  const itemList5 = boardItem5.map((_, index) => (
    <LetterCard customClass={`${colors['5'][index]} rounded-hard w-20 h-20`} key={index}>
      <span className="text-sub-big text-white">
        {wordsState['5'][index]?.toUpperCase() || ''}
      </span>
    </LetterCard>
  ));

  return (
    <section className="grid grid-cols-5 grid-rows-5 gap-3 mb-12">
      {itemList1}
      {itemList2}
      {itemList3}
      {itemList4}
      {itemList5}
    </section>
  );
};

export default Board;

