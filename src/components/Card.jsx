import React from 'react';
import{useState} from 'react';
import '../App.css';

const Card = ({product, handleDelete}) => {
   
    // const [isFadingOut, setIsFadingOut] = useState(false);
    // const fadeOut = (cb)=>{
    //     setIsFadingOut(true);
    //     cb()
    //   }

    
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
                        
                        {/* <div className={isFadingOut? 'item-fadeout' :'item'}>
                        <button className="deleteBtn" onClick={()=>fadeOut(setTimeout(()=>handleDelete(product.id),300))}>Delete Product</button> */}
                        <button className="deleteBtn" onClick={() => handleDelete(product.id)}>Delete Product</button>
                </div>
                </div>
        </div>
    );
}
 
export default Card;
