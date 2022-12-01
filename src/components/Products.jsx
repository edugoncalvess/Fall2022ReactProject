import { useState, useEffect} from "react";
import Card from './Card';
import Header from './Header';
import Fade from '@mui/material/Fade';
import { Zoom } from "@mui/material";
// import { TransitionGroup } from 'react-transition-group';
import StyleCSS from '../style/StyleCSS.module.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
    }

    useEffect(() => {        
        fetch('https://fakestoreapi.com/products?limit=12')
        .then(res => {return res.json()})
        .then(data => {
            setProducts(data);
        });
    }, []);

    const handleAddProduct = () => {
        
        var randomNum = Math.floor(Math.random() * (20 - 13 + 1) + 13);
        var urlToCall = 'https://fakestoreapi.com/products/' + randomNum;

        console.log(urlToCall);
        fetch(urlToCall)
        .then(res => {return res.json()})
        .then(data => {
            setProducts([...products, data])
        })
    }

    return (
        <div>
            {/* <Zoom in={true}><Header title={'Products'} /> </Zoom> */}
            <Header title={'Products'} />
            <button className={StyleCSS.btn} onClick={handleAddProduct} >Add Product</button>

            <div className={StyleCSS.card}>
                <div className="row">
                
                    {products.map((eachProduct) => (
                        
                        <Card 
                        className={StyleCSS.card}
                        product={eachProduct}
                        key={eachProduct.id}
                        handleDelete={handleDelete} 
                        />
                        
                    ))}
                
                </div>
            </div>
        </div>

      );
}

 
export default Products;