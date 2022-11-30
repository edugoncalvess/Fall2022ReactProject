import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header title={'Home'} />
            <br />
            <h3>Project Description</h3>
            <p>Something here</p>
            <p>The source code for this project can be found at the following link:</p>
            <a href='https://github.com/edugoncalvess/Fall2022ReactProject'>Fall2022ReactProject source code</a>
            <p>etc....</p>
            <br />
            <h3>Rick & Morty Simple App</h3>
            <p>The version of the Rick and Morty page here uses react components and imports a json file as a parameter</p>
            <p>A simpler version can be founded in the following link</p>
            <a href='https://edugoncalvess.github.io/BasicAppRickMorty/'>https://edugoncalvess.github.io/BasicAppRickMorty/</a>
            <p>Its source code can be shown here:</p>
            <a href='https://github.com/edugoncalvess/BasicAppRickMorty.git'>BasickAppRickMorty source code</a>
            <br />
            <h3>API documentation</h3>

            <p>Here we describe the endpoints of our API</p>
 
        </div>
    )
}

export default Home;
