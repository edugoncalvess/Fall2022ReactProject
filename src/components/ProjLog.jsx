import Header from './Header';

const ProjLog = () => {
    return (
        <div>
            <Header title={'Project Log'} />
            <br />
            <h3>Project History</h3>
            <p>2022-11-10 - Group Creation</p>
            <p>etc....</p>
            <p>2022-11-27 - Zoo API is shutdown and the project has to be reshaped to use fakestore API</p>
            <p>2022-11-29 - React Router is implemented. A live version of the App is created.</p>
            <br />
            <br />
            <h3>Future Implementations/Improvements</h3>
            <ul>
                <li>Unify Card and RMCard using parameters to adjust the template/labels</li>
                <li>Implement an array find on AddProduct handleAddProduct() function so it becomes impossible to duplicate a product</li>

            </ul>
        </div>
    )
}

export default ProjLog;
