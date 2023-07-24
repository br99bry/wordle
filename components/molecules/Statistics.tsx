import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import * as language from '@/assets/constants/language/sections/Statistics'

type StatisticsProps = {
  handleClick: () => void;
  isGameEnd: boolean;
  selectedWordArray?: string[];
  shouldShowWord: boolean;
}

const Statistics: React.FC<StatisticsProps> = ({
  handleClick,
  isGameEnd,
  selectedWordArray,
  shouldShowWord,
}) => {
  const [wins, setWins] = useState<string>('0');
  const [rounds, setRounds] = useState<string>('0');
  const initialMinutes: number = 5;
  const [time, setTime] = useState<number>(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    if (Number.parseInt(`${localStorage.getItem('wins')}`) >= 0) {
      setWins(`${localStorage.getItem('wins')}`);
    }
    if (Number.parseInt(`${localStorage.getItem('rounds')}`) >= 0) {
      setRounds(`${localStorage.getItem('rounds')}`);
    }
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isGameEnd && time > 0 && isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isGameEnd, time, isRunning]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <main className="flex items-center flex-col dark:text-white">
      <h2 className="w-full text-sub-big text-center mb-11">{language.TEXT1}</h2>
      <div className="flex justify-around items-center w-full mb-10">
        <div>
          <p className="text-center text-little-bold mb-6">{rounds}</p>
          <p className="text-center text-little-light mb-6">{language.TEXT2}</p>
        </div>
        <div>
          <p className="text-center text-little-bold mb-6">{wins}</p>
          <p className="text-center text-little-light mb-6">{language.TEXT3}</p>
        </div>
      </div>
      {isGameEnd && shouldShowWord && (
        <p className="text-center w-full text-little-light mb-4">
          {language.TEXT4}
          {' '}
          <span className="text-little-bold">
            {selectedWordArray?.join('')}
          </span>
        </p>
      )}
      {isGameEnd && (
        <>
          <p className="text-center w-full text-little-light mb-4">{language.TEXT5}</p>
          <p className="text-center w-full text-little-bold mb-8">{formatTime(time)}</p>
        </>
      )}
      <Button
        isDisabled={false}
        handleClick={handleClick}
        customClass="w-fit text-mid-bold text-white bg-hard-green rounded-soft py-2 px-12"
      >
        {language.TEXT6}
      </Button>
    </main>
  );
};

export default Statistics;

