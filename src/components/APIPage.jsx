import { useState, useEffect} from "react";
import APICard from './APICard';
import Header from './Header';

const APIPage = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {        
        fetch('https://whispering-atoll-67985.herokuapp.com/https://radit-api.herokuapp.com/quotes')
        .then(res => {return res.json()})
        .then(data => {
            setQuotes(data);
        });
    }, []);

    return (
        <div>
            <Header title={'Quotes API'} />
            <div className="row">
            {quotes.map((eachQuote) => (
                <APICard 
                 quotes={eachQuote}
                 key={eachQuote._id}/>
            ))}
        </div>
        </div>

      );

}

export default APIPage;