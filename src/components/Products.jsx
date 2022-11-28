import { useState, useEffect} from "react";
import Card from './Card';
import Header from './Header';

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
            <button onClick={handleAddProduct}>Add Product</button>
            <div className="row">
            {products.map((eachProduct) => (
                <Card 
                 product={eachProduct}
                 key={eachProduct.id}
                 handleDelete={handleDelete}/>
            ))}
        </div>
        </div>

      );
}

 
export default Products;