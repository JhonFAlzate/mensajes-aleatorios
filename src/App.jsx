import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import getRandomNumber from './utils/getRandomNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'
import photos from './data/photos.json'
function App() {
  const indexRandom = getRandomNumber(quotes.length)

  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])
  const [bgSelected, SetBfSelected] = useState(photos[getRandomNumber(photos.length)])
  
  const objStyle = {
    backgroundImage: `url(/img/fondo${bgSelected}.png)`
  }

  return (
    <div className='container' style={objStyle}>
      <h1 className='title'>GALLETAS DE LA FORTUNA</h1>
      
        <BtnPhrase cl
           setPhraseSelected={setPhraseSelected}
           SetBfSelected={SetBfSelected}
          />
      
       <div className='phrase'>
      <Phrase phraseSelected = {phraseSelected}/>
      </div>
    </div>
  )
}

export default App
