import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header title={'Home'} />
            <br />
            
            <h3>Project Description</h3>
            <p>This page displays a React Js application that uses create-react framework</p>
            <p>The source code for this project can be found at the following link:</p>
            <a href='https://github.com/edugoncalvess/Fall2022ReactProject'>Fall2022ReactProject source code</a>
            <p>
                The live version of this code is available on the following link
            </p>
            <a href='https://fall2022-react-project.vercel.app/'>https://fall2022-react-project.vercel.app/</a>
            <br />
            <br />
            <h3>Rick & Morty Simple App</h3>
            <p>The version of the Rick and Morty page here uses react components and imports a json file as a parameter into create-react framework</p>
            <p>A simpler version can be founded in the following link</p>
            <a href='https://edugoncalvess.github.io/BasicAppRickMorty/'>https://edugoncalvess.github.io/BasicAppRickMorty/</a>
            <p>Its source code can be shown here:</p>
            <a href='https://github.com/edugoncalvess/BasicAppRickMorty.git'>BasickAppRickMorty source code</a>
            <br />
            <br />
            <h3>Quotes API</h3>

            <p>The source code for the API can be found at the following link:</p>
            <a href='https://github.com/raditzanardi/quotesAPI.git'>Quotes API source code</a>
            <p>The endpoint Url is: </p>
            <a href='https://radit-api.herokuapp.com/quotes'>https://radit-api.herokuapp.com/quotes</a>

 
        </div>
    )
}

export default Home;
