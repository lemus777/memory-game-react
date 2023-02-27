import { useState } from 'react';
import { MainScreen } from './components/MainScreen';
import { GameScreen } from './components/GameScreen';
import { FinalScreen } from './components/FinalScreen';

function App() {
  // Variables de estado
  const [theme, setTheme] = useState(0); // 0 = Avengers, 1 = Disney, 2 = Harry Potter, 3 = Star Wars
  const [stateGame, setStateGame] = useState(0); // 0 = no iniciado, 1 = en proceso, 2 = finalizado

  // Variables de estado para el reloj
  const [intervalId, setIntervalId] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);

  // Cambiar la temática
  const changeTheme = () => {
    setTheme(theme === 3 ? 0 : theme + 1)
  };

  // Determinar estado del juego
  const changeStateGame = (value) => {
    setStateGame(value);
    if( value === 1 ) playTimer();
  };

  // Reiniciar el juego
  const restartGame = () => {
    setStateGame(0);
    setTheme(0);
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
          changeTheme={changeTheme}
          setStart={changeStateGame}
        /> : <GameScreen time={miliSeconds} theme={theme} setRestart={restartGame} />
      }
      <FinalScreen />
    </div>
  );
};

export default App;
