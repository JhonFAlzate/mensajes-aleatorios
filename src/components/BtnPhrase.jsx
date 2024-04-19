import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'
const BtnPhrase = ({setPhraseSelected, SetBfSelected}) => {
    const changePhrase = () => {
    const indexRandom = getRandomNumber(quotes.length)
    setPhraseSelected(quotes[indexRandom])
    SetBfSelected(photos[getRandomNumber(photos.length)])
  }
    return (

         <button className="button" onClick={changePhrase}>Probar mi suerte</button>
  )
}

export default BtnPhrase