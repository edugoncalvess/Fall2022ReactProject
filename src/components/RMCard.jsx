const RMCard = ({character}) => {

    return (
        <div className="col-3">
        <div className="card">
          <img
            src={character.imgSrc}
            alt={character.cardAlt}
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">{character.cardTitle}</h3>
            <p>{character.origin}</p>
          </div>
        </div>
      </div>
    )
}
 
export default RMCard;