import Header from './Header';
import StyleCSS from '../style/StyleCSS.module.css';

const Home = () => {
    return (
        <div className={StyleCSS.background}>
            <Header title={'Home'} />

            <div className={StyleCSS.div}>
                <p>01. </p>
                <h3 className={StyleCSS.subHeader}>Project Description</h3>
                <div className={StyleCSS.body}>
                    <p>This page displays a React Js application that uses create-react framework</p>
                    <p>The source code for this project can be found at the following link:</p>
                    <p><a className={StyleCSS.link} href='https://github.com/edugoncalvess/Fall2022ReactProject'>Fall2022ReactProject source code</a></p>
                    <p>The live version of this code is available on the following link</p>
                <a className={StyleCSS.link} href='https://fall2022-react-project.vercel.app/'>https://fall2022-react-project.vercel.app/</a>
                </div>
            </div>

            <div className={StyleCSS.div}>
                <p>02.</p>
                <h3 className={StyleCSS.subHeader}>Rick & Morty Simple App</h3>
                <div className={StyleCSS.body}>
                    <p>The version of the Rick and Morty page here uses react components and imports a json file as a parameter into create-react framework</p>
                    <p>A simpler version can be founded in the following link</p>
                    <p><a className={StyleCSS.link} href='https://edugoncalvess.github.io/BasicAppRickMorty/'>https://edugoncalvess.github.io/BasicAppRickMorty/</a></p>
                    <p>Its source code can be shown here:</p>
                    <p><a className={StyleCSS.link} href='https://github.com/edugoncalvess/BasicAppRickMorty.git'>BasickAppRickMorty source code</a></p>
                </div> 
            </div>

            <div className={StyleCSS.div}>
                <p>03. </p>
                <h3 className={StyleCSS.subHeader}>Quotes API</h3>
                <div className={StyleCSS.body}> 
                    <p>The source code for the API can be found at the following link:</p>
                    <p><a className={StyleCSS.link} href='https://github.com/raditzanardi/quotesAPI.git'>Quotes API source code</a></p>
                    <p>The endpoint Url is: </p>
                    <p><a className={StyleCSS.link} href='https://radit-api.herokuapp.com/quotes'>https://radit-api.herokuapp.com/quotes</a></p>
                </div>
            </div>
 
        </div>
    )
}

export default Home;
