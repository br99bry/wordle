import React, { MouseEventHandler } from "react";
import QuestionIcon from "../atoms/icons/QuestionIcon";
import GraphIcon from "../atoms/icons/GraphIcon";
import ToggleBackGround from "../atoms/icons/ToggleBackground";
import Button from "../atoms/Button";

interface NavbarProps {
  handleInstructions: MouseEventHandler<HTMLButtonElement>;
  handleStatistics: MouseEventHandler<HTMLButtonElement>;
}

const Navbar: React.FC<NavbarProps> = ({ handleInstructions, handleStatistics }) => (
  <nav className="flex py-7 pr-5 pl-5 justify-between w-full mb-20 bg-soft-gray rounded-hard items-center dark:bg-hard-blue">
    <Button isDisabled={false} handleClick={handleInstructions}><QuestionIcon /></Button>
    <div>
      <h1 className="text-big text-soft-black dark:text-white">WORDLE</h1>
    </div>
    <div className="flex gap-1.5 items-center">
      <Button isDisabled={false} handleClick={handleStatistics}>
        <GraphIcon />
      </Button>
      <ToggleBackGround />
    </div>
  </nav>
);

export default Navbar;
