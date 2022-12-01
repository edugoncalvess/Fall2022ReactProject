import Header from './Header';
import StyleCSS from '../style/StyleCSS.module.css';

const ProjLog = () => {
    return (
        <div className={StyleCSS.background}>
            <Header title={'Project Log'} />
            
            <div className={StyleCSS.div}>
                <h3 className={StyleCSS.subHeader}>Project History</h3>
                <div className={StyleCSS.body}>
                    <p>2022-11-10 - Group Creation</p>
                    <p>etc....</p>
                    <p>2022-11-27 - Zoo API is shutdown and the project has to be reshaped to use fakestore API</p>
                    <p>2022-11-29 - React Router is implemented. A live version of the App is created.</p>
                </div>
            </div>

            <div className={StyleCSS.div}>
                <h3 className={StyleCSS.subHeader}>Future Implementations/Improvements</h3>
                <div>
                    <ul className={StyleCSS.body}>
                        <li>Unify Card and RMCard using parameters to adjust the template/labels</li>
                        <li>Implement an array find on AddProduct handleAddProduct() function so it becomes impossible to duplicate a product</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjLog;
