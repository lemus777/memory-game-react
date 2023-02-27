const Card = (props) => {
  return(
    <div className={`card ${props.rotate ? 'rotate' : ''}`}
      data-id={props.id}
      data-bind={props.bind}
      onClick={ () => props.actionRotate(props.id, props.set) }
    >
      <div className="card--inner">
        <div className="card--front middle">
          <i className="fas fa-question"></i>
        </div>
        <div className="card--back middle">
          <i className={props.image}></i>
        </div>
      </div>
    </div>
  )
};

export { Card };
