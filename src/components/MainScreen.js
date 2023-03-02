import { Button } from './Button';

const MainScreen = (props) => {
  const themeText = ['Avengers', 'Disney', 'Harry Potter', 'Star Wars'];
  const levelText = ['Easy', 'Medium', 'Hard']
  return(
    <div className='mainscreen text-center'>
      <h1 className='mainscreen--title'>Memory Game</h1>
      <div className='mainscreen--menu'>
        <p>{props.selection}</p>
        <div className='mainscreen--themes'>
        <Button label={themeText[0]} action={props.chooseAvengers} />
        <Button label={themeText[1]} action={props.chooseDisney} />
        <Button label={themeText[2]} action={props.chooseHP} />
        <Button label={themeText[3]} action={props.chooseSW} />
        </div>
        <p>Select level</p>
        <Button label={levelText[props.level]} action={props.changeLevel} />
        < br/>
        <Button label='Start' action={ () => props.setStart(1) } />
      </div>
      <p>Made with <span className='logo-react'><i className='fab fa-react'></i></span></p>
    </div>
  )
};

export { MainScreen };
