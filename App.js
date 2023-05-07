import React, { useState } from 'react';

const tarotCards = [
  {
    name: 'The Fool',
    description: 'Represents new beginnings, spontaneity, and unlimited potential.',
  },
  {
    name: 'The Magician',
    description: 'Symbolizes power, skill, and the ability to manifest desires.',
  },

  { name: 'The High Priestess', 
  description: 'Symbolizes intuition, inner wisdom, and the subconscious mind.', 
  },

  { name:'The Empress', 
  description: 'Represents abundance, nurturing, and fertility.', 
  }
  // ... Add more tarot card data here
];

function App() {
  const [randomCards, setRandomCards] = useState([]);
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const generateRandomCards = () => {
    const generatedCards = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const randomCard = tarotCards[randomIndex];
      generatedCards.push(randomCard);
    }
    setRandomCards(generatedCards);
  };

  return (
    <div style={styles.container}>
      <div style={styles.centered}>
        <input type="text" value={textInput} onChange={handleInputChange} style={styles.textInput} />
        <button onClick={generateRandomCards} style={styles.button}>Draw Three Cards</button>
      </div>
      <div style={styles.cardContainer}>
        {randomCards.map((card, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{card.name}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  textInput: {
    margin: '30px',
    padding: '20px',
    width: '600px', 
  },
  button: {
    margin: '10px',
    padding: '8px 16px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    width: '200px',
    backgroundColor: '#f2f2f2',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#666',
  },
};

export default App;
