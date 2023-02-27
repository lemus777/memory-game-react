import { Button } from './Button';

const MainScreen = (props) => {
  const themeText = ['Avengers', 'Disney', 'Harry Potter', 'Star Wars'];
  const levelText = ['Easy', 'Medium', 'Hard']
  return(
    <div className='mainscreen text-center'>
      <h1 className='mainscreen--title'>Memory Game</h1>
      <div className='mainscreen--menu'>
        <p>Select theme</p>
        <Button label={themeText[props.theme]} action={props.changeTheme} />
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
