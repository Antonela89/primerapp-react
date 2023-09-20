function Usuario(props) {
  return (
    <div>
        <div className="card" style={{width: '18rem', backgroundColor: props.color}}>
            <img src={props.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.cargo}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    </div>
  )
}

export default Usuario
