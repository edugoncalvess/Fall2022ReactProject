import Header from './Header';
import '../App.css';
import StyleCSS from '../style/StyleCSS.module.css'

const ProjLog = () => {
    return (
        <div className={StyleCSS.background}>
        <Header title={'Project Log'} />
        
        <div className={StyleCSS.div}>
            <h3 className={StyleCSS.subHeader}>Project Log</h3>
            <div className={StyleCSS.body}>
            <p>2022-11-10 - Group Creation</p>
            <p>2022-11-22 - Created Github Repository and the Simple Rick Morty React Page is created</p>
            <p>2022-11-22 - Zoo API is defined as the public API to be used to Frontend App</p>
            <p>2022-11-24 - Frontend App is implemented fetching API and displaying data into cards</p>
            <p>2022-11-24 - Add card and remove card is implemented</p>
            <p>2022-11-27 - Zoo API is shutdown and the project has to be reshaped to use fakestore API.</p>
            <p>2022-11-29 - React Router is implemented. A live version of the App is created.</p>
            <p>2022-11-29 - The Simple Rick & Morty App is moved to another repository and a live version created in Github Pages</p>
            <p>2022-11-29 - Deployed the Frontend App on Vercel. </p>
            <p>2022-11-29 - Implement Navigation bar with options like Home, Product, Rick and Morty, Quotes API, and Project Log</p>
            <p>2022-11-30 - Search bar is added to our own API to find the qoutes based on the keywords and deployed the API On Heroku as well. </p>
            <p>2022-11-30 - CSS style and animations are added to the Frontend application</p>
            
            </div>
        </div>

        <div className={StyleCSS.div}>
                <h3 className={StyleCSS.subHeader}>Future Implementations/Improvements</h3>
                <div>
                    <ul className={StyleCSS.body}>
                        <li>Unify Card and RMCard using parameters to adjust the template/labels</li>
                        <li>Implement an array find on AddProduct handleAddProduct() function so it becomes impossible to duplicate a product</li>
                        <li>Implement style in order to collapse product description until get clicked</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProjLog;
