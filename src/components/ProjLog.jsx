import Header from './Header';

const ProjLog = () => {
    return (
        <div>
            <Header title={'Project Log'} />
            <h3>Project Log</h3>
            <p>Nov 10 - Group Creation</p>
            <p>etc....</p>
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