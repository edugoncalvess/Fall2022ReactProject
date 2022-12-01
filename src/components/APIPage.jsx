import { useState, useEffect} from "react";
import APICard from './APICard';
import Header from './Header';
import { Input } from 'semantic-ui-react'

const APIPage = () => {
    const [quotes, setQuotes] = useState([]);
    const [filteredResults, setFilteredResults] = useState([])
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {        
        fetch('https://whispering-atoll-67985.herokuapp.com/https://radit-api.herokuapp.com/quotes')
        .then(res => {return res.json()})
        .then(data => {
            setQuotes(data);
        });
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = quotes.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
            console.log(filteredData)
        }
        else{
            setFilteredResults(quotes)
        }
    }

    return(
        <div>
            <Header title={'Quotes API'} />
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <div className="row">
                {searchInput.length > 1 ? (
                    filteredResults.map((eachQuote) => {
                        return (
                            <APICard 
                             quotes={eachQuote}
                             key={eachQuote._id}/>
                        )
                    })
                ) : (
                    quotes.map((eachQuote) => {
                        return (
                            <APICard 
                             quotes={eachQuote}
                             key={eachQuote._id}/>
                        )
                    })
                )}
            </div>
        </div>
    )

}

export default APIPage;