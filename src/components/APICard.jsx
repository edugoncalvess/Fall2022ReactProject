const APICard = ({quotes}) => {

    return (
        <div className="col-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{quotes.quote}</h3>
            <p>Source: {quotes.source}</p>
            <p>Year: {quotes.year}</p>
          </div>
        </div>
      </div>
    )
}
 
export default APICard;