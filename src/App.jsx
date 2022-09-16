import { useState, useEffect } from 'react'
import CardsMagic from './components/CardsMagic'
import api from './services/api'

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
    getCards(25)
  }, [])

  return (
    <div className="App container">
      <h1>Magic the gathering</h1>
      
      <div className="cards">
      {MTGCards?.map(cards => {
          return <CardsMagic cardmtg={cards} />
        })}
        
      </div>
      
    </div>
    
  )
}

export default App