import QuestionIcon from "../atoms/icons/QuestionIcon"
import GraphIcon from "../atoms/icons/GraphIcon"
import ToggleBackGround from "../atoms/icons/ToggleBackground"

const Navbar = (): JSX.Element => (
  <nav className="flex py-7 pr-5 pl-5 justify-between w-full mb-20 bg-soft-gray rounded-hard items-center">
    <div><QuestionIcon /></div>
    <div>
      <h1 className="text-big text-soft-black" >WORDLE</h1>
    </div>
    <div className="flex gap-1.5 items-center"><GraphIcon /><ToggleBackGround /></div>
  </nav>
)

export default Navbar