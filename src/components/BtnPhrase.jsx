import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({phraseSelected, setPhraseSelected, SetBfSelected, bgSelected}) => {
    const changePhrase = () => {
      let indexRandom =getRandomNumber(quotes.length)
      let indexPhotos = getRandomNumber(photos.length)

      while (quotes[indexRandom] === phraseSelected) {
        indexRandom = getRandomNumber(quotes.length)
      }
      while (photos[indexPhotos] === bgSelected) {
        indexPhotos = getRandomNumber(photos.length)
      }

    setPhraseSelected(quotes[indexRandom])
    SetBfSelected(photos[getRandomNumber(photos.length)])
  }
    return (

         <button className="button" onClick={changePhrase}>Ver otra frase</button>
  )
}

export default BtnPhrase

// import getRandomNumber from "../utils/getRandomNumber"
// import quotes from '../data/phrases.json'
// import photos from '../data/photos.json'

// const BtnPhrase = ({setPhraseSelected, SetBfSelected}) => {
//     const changePhrase = () => {
//     const indexRandom = getRandomNumber(quotes.length)
//     setPhraseSelected(quotes[indexRandom])
//     SetBfSelected(photos[getRandomNumber(photos.length)])
//   }
//     return (

//          <button className="button" onClick={changePhrase}>Ver otra frase</button>
//   )
// }

// export default BtnPhrase