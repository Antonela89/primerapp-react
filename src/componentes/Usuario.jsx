function Usuario(props) {
  return (
    <div>
        <div className="card m-4" style={{width: '18rem', backgroundColor: props.color}}>
            <img src={props.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.cargo}<small className="text-body-secondary"></small></p>
                <a href="##" className="btn btn-color" style={{border:'1px solid black'}}>{props.conoceme}</a>
            </div>
        </div>
    </div>
  )
}

export default Usuario
