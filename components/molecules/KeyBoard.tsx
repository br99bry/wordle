import Button from "../atoms/Button"
import LetterCard from "../atoms/LetterCard"

const KeyBoard = ({ handleKeyClick }): JSX.Element => {
  const keysRowOne = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keysRowTwo = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ']
  const keysRowThree = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Borrar']
  return (
    <section className="grid grid-cols-10 gap-2 w-full bg-sub-soft-gray p-8 rounded-hard">
      {keysRowOne.map((item) => (
        <LetterCard customClass="bg-sub-mid-gray rounded-soft w-fit h-fit px-3 py-1.5 text-little text-low-gray ">
          <Button handleClick={handleKeyClick}>
            {item}
          </Button>
        </LetterCard>
      ))}
      {keysRowTwo.map((item) => (
        <LetterCard customClass="bg-sub-mid-gray rounded-soft w-fit h-fit px-3 py-1.5 text-little text-low-gray ">
          <Button handleClick={handleKeyClick}>
            {item}
          </Button>
        </LetterCard>
      ))}
      {keysRowThree.map((item) => (
        <LetterCard customClass="bg-sub-mid-gray rounded-soft w-fit h-fit px-3 py-1.5 text-little text-low-gray ">
          <Button handleClick={handleKeyClick}>
            {item === 'Borrar' ? '*' : item}
          </Button>
        </LetterCard>
      ))}
    </section>
  )
}



export default KeyBoard
