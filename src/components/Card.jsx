const Card = ({product, handleDelete}) => {
    return (  
        <div className="col-3">
                <div className="card">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        
                        <h3 className="card-title">{product.title}</h3>
                        <p> Description : {product.description}</p>
                        <button onClick={() => handleDelete(product.id)}>Delete Product</button>
                    </div>
                </div>
        </div>
    );
}
 
export default Card;