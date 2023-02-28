import { useState } from 'react';
import { MainScreen } from './components/MainScreen';
import { GameScreen } from './components/GameScreen';
import { FinalScreen } from './components/FinalScreen';

function App() {
  // Variables de estado
  const [theme, setTheme] = useState(0); // 0 = Avengers, 1 = Disney, 2 = Harry Potter, 3 = Star Wars
  const [level, setLevel] = useState(0); // 0 = facil, 1 = medio, 2 = dificil
  const [stateGame, setStateGame] = useState(0); // 0 = no iniciado, 1 = en proceso, 2 = finalizado

  // Número de cartas según nivel
  const cardsByLevel = {
    0: 12,
    1: 16,
    2: 20
  }

  // Variables de estado para el reloj
  const [intervalId, setIntervalId] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);

  // Cambiar la temática
  const changeTheme = () => {
    setTheme(theme === 3 ? 0 : theme + 1);
  };

  // Cambiar la dificultad
  const changeLevel = () => {
    setLevel(level === 2 ? 0 : level + 1)
  }

  // Determinar estado del juego
  const changeStateGame = (value) => {
    setStateGame(value);
    if( value === 1 ) playTimer();
  };

  // Reiniciar el juego
  const restartGame = () => {
    setStateGame(0);
    setTheme(0);
    setLevel(0);
    resetTime();
  }

  // Métodos para el reloj
  const playTimer = () => {

    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
    }

    const newIntervalId = setInterval ( () => {
      // cada segundo se va a actualizar el contador
      setMiliSeconds( miliSeconds => miliSeconds + 1000)
    }, 1000)

    setIntervalId(newIntervalId);
  }

  // Detener el reloj
  const resetTime = () => {
    setMiliSeconds(0);
    if( intervalId ){
      clearInterval(intervalId);
      setIntervalId(0);
    }
  }

  return (
    <div className="container middle">
      { stateGame === 0 ?
        <MainScreen 
          theme={theme}
          level={level}
          changeTheme={changeTheme}
          changeLevel={changeLevel}
          setStart={changeStateGame}
        /> : stateGame === 1 ?
        <GameScreen 
          numCards={cardsByLevel[level]}
          time={miliSeconds}
          theme={theme}
          level={level}
          setRestart={restartGame}
          setFinal={changeStateGame}
        /> : <FinalScreen setRestart={restartGame} />
      }
    </div>
  );
};

export default App;
