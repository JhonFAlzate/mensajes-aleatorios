

const Phrase = ({phraseSelected}) => {

  return (
    <p className="textphrase"><span>{phraseSelected.cita}</span> <br /> 
    <span className="autor"> ✍ 🠚{phraseSelected.autor}</span></p>
   
  )
}

export default Phrase