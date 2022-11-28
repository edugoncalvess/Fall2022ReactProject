import RMCard from './RMCard';
import Header from './Header';
import RickMortyData from '../data/rickmortydata.json';

const RickMorty = () => {

    var characters = RickMortyData;
    
    return (
        <div>
            <Header title={'Characters'} />
            <div className="row">
                {characters.map( characterContent =>
                    <RMCard 
                        character = {characterContent}
                        key={characterContent.id}
                    />
                )}
            </div>
        </div>
    )
}

export default RickMorty;