const LetterCard = ({ children, customClass }): JSX.Element => (
  <div className={`flex justify-center items-center ${customClass}`}>
    <p className="text-center">{children}</p>
  </div>
)

export default LetterCard