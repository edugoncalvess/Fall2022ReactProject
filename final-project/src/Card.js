const Card = ({animal, handleDelete}) => {
    // const animals = props.animals;

    return (  
        <div className="col-3">
                <div className="card">
                    <img
                        src={animal.image_link}
                        alt={animal.latin_name}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <h3 className="card-title">{animal.name}</h3>
                        <p>Habitat: {animal.habitat}</p>
                        <button onClick={() => handleDelete(animal.id)}>Delete Animal</button>
                    </div>
                </div>
        </div>
    );
}
 
export default Card;