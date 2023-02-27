import { Button } from "./Button";

const FinalScreen = (props) => {
  return(
    <div className="finishscreen text-center">
      <h1 className="finishscreen--title">You win!</h1>
      < br/>
      <Button label='Restart game' action={props.setRestart} />
    </div>
  )
};

export { FinalScreen };
