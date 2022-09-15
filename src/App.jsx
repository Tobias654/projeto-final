import { useState, useEffect } from 'react'
import CardsMagic from './components/CardsMagic'
import api from './services/apim'

function App() {
  const [MTGCards, setCards] = useState([])


  const getCards = async (total) => {
    const listCards = []

    for(let i = 1; i <= total; i++) {
      const newCard = await api
        .get(`${i.toString()}`)
        .then(response => response.data)
        .catch(err => console.log(err))


      listCards.push(newCard)  
    }

    setCards([...MTGCards, ...listCards])

    console.log(MTGCards)  
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="App container">
      <h1>Cards de Magic</h1>
      <div className="cards">
        {MTGCards?.map(mgc => {
          return <CardsMagic magic={mgc} />
        })}
      </div>
    </div>
  )
}

export default App