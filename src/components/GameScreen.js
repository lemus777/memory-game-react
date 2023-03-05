import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { arrCardRand } from "../logic/createArrCardsRand";
import { convertTimer } from "../logic/converTimer";

const GameScreen = (props) => {
  // Variables de estado
  const [cardsArr, setCardsArr] = useState([]);
  const [moves, setMoves] = useState(0);

  // Llamar la función de generar array cards aleatorio
  useEffect( () => {
    setCardsArr(arrCardRand(props.numCards, props.theme)); 
  }, [props.numCards, props.theme]);

  // Rotate function
  const rotate = (id) => {
    setCardsArr( prevArr => {
      if (prevArr[id].set === 0) {
        setMoves(moves + 1);
        prevArr[id].rotate = true;
        prevArr[id].validating = 1; // indica que este elemento está siendo evaluado
        return [...prevArr];
      } else {
        return [...prevArr];
      }
    } )
    setTimeout( () => validate(), 500 )
  };

  // Validate function
  const validate = () => {
    const validatingCards = cardsArr.filter( card => card.validating === 1 );

    if( validatingCards.length >= 2) { // Igual o mayor a dos para evitar el problema de que si volteamos tres rápido deja de validar

      if( validatingCards[0].bind !== validatingCards[1].bind) {
        // validación no coincide
        setCardsArr( prevArr => {
          prevArr[validatingCards[0].id].rotate = false; // Esto es un poco lioso: del array previo (prevArr) accedemos al elemento cuya id coincide 
          prevArr[validatingCards[0].id].validating = 0; // con la del elemento primero que estamos validando y cambiamos su rotate y su validating
          prevArr[validatingCards[1].id].rotate = false; // y luego hacemos lo mismo con el elemento segundo que estamos validando
          prevArr[validatingCards[1].id].validating = 0; // Finalmente retornamos el array previo con las modificaciones hechas
          return [...prevArr];
        })
      } else {
        // validación exitosa
        setCardsArr( prevArr => {
          prevArr[validatingCards[0].id].set = 1; 
          prevArr[validatingCards[0].id].validating = 0; 
          prevArr[validatingCards[1].id].set = 1; 
          prevArr[validatingCards[1].id].validating = 0; 
          return [...prevArr];
        })
      }
    }
    // verificar que no hay elementos validándose
    const setCards = cardsArr.filter( card => card.set === 0).length;
    if( setCards === 0) {
      // Llamamos a una función para mostrar la pantalla final
      props.setFinal(2);
    }
  }

  return(
    <div className="gamescreen">
      <div className="gamescreen--score grid grid-2">
        <div className="gamescreen--moves">
          <p>Moves: {moves}</p>
        </div>
        <div className="gamescreen--time text-right">
          <p>Time: {convertTimer(props.time)}</p>
        </div>
      </div>
      <div className="gamescreen--cards grid grid-4">
        {
          cardsArr
            .sort( (a,b) => a.id - b.id)
            .map( card => {
              return <Card
                theme={card.theme}
                key={card.id}
                id={card.id}
                rotate={card.rotate}
                image={card.image}
                bind={card.bind}
                fixed={card.fixed}
                actionRotate={rotate}
              />;
            })
        }
      </div>
      <div className="text-center">
        <Button label='Restart game' action={props.setRestart} />
      </div>
    </div>
  )
};

export { GameScreen };
