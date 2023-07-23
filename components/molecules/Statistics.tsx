import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";

interface StatisticsProps {
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
  const [time, setTime] = useState<number>(initialMinutes * 60); // Convert initialMinutes to seconds
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
    console.log('las rondas ', rounds);
  }, [rounds]);

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
    <main className="flex items-center flex-col">
      <h2 className="w-full text-sub-big text-center mb-11">Estadísticas</h2>
      <div className="flex justify-around items-center w-full mb-10">
        <div>
          <p className="text-center text-little-bold mb-6">{rounds}</p>
          <p className="text-center text-little-light mb-6">Jugadas</p>
        </div>
        <div>
          <p className="text-center text-little-bold mb-6">{wins}</p>
          <p className="text-center text-little-light mb-6">Victorias</p>
        </div>
      </div>
      {shouldShowWord && (
        <p className="text-center w-full text-little-light mb-4">
          La palabra era:
          {' '}
          <span className="text-little-bold">
            {selectedWordArray?.join('')}
          </span>
        </p>
      )}
      {isGameEnd && (
        <>
          <p className="text-center w-full text-little-light mb-4">SIGUIENTE PALABRA</p>
          <p className="text-center w-full text-little-bold mb-8">{formatTime(time)}</p>
        </>
      )}
      <Button
        isDisabled={time === 0}
        handleClick={handleClick}
        customClass="w-fit text-mid-bold text-white bg-hard-green rounded-soft py-2 px-12"
      >
        Aceptar
      </Button>
    </main>
  );
};

export default Statistics;

