import Header from './Header';
import '../App.css';

const ProjLog = () => {
    return (
        <div>
            <Header title={'Project Log'} />
            <br />
            <h3 className='projlog'>Project History</h3>
            <p>2022-11-10 - Group Creation</p>
            <p>2022-11-27 - Zoo API is shutdown and the project has to be reshaped to use fakestore API</p>
            <p>2022-11-29 - React Router is implemented. A live version of the App is created.</p>
            <p>API is deployed to Heroku and React fronted app is deployed in Vercel. </p>
            <br />
            <br />
            <h3 className='projlog'>Implementations/Improvements</h3>
            <ul>
                <li>Unify Card and RMCard using parameters to adjust the template/labels</li>
                <li>Implement an array find on AddProduct handleAddProduct() function so it becomes impossible to duplicate a product</li>
                <li>Implement Navigation bar with options like Home, Product, Rick and Morty, Quotes API, and Project Log</li>
                <li>Try to use React CSS Transition Group to animate the product while adding and deleting it.</li>
                
            </ul>
        </div>
    )
}

export default ProjLog;
