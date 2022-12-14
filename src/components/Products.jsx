import { useState, useEffect} from "react";
import Card from './Card';
import Header from './Header';
// import Fade from '@mui/material/Fade';
// import { Zoom } from "@mui/material";
// import { TransitionGroup } from 'react-transition-group';
// import StyleCSS from '../style/StyleCSS.module.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

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

            <Header title={'Products'} />

            <button className="addBtn" onClick={handleAddProduct}>Add Product</button>

                {/* css Transition */}
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={400}
                    className="row">
                    {products.map((eachProduct) => (
                        <Card
                            product={eachProduct}
                            key={eachProduct.id}
                            handleDelete={handleDelete} />
                    ))}

                </ReactCSSTransitionGroup>  



        </div>

      );
}

 
export default Products;
