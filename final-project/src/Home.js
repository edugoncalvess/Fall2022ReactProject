import { useState, useEffect} from "react";
import Card from './Card';

const Home = () => {

    const [animals, setAnimals] = useState([]);

    const handleDelete = (id) => {
        const newAnimals = animals.filter(animal => animal.id !== id);
        setAnimals(newAnimals);
    }

    useEffect(() => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
        .then(res => {return res.json()})
        .then(data => {
            setAnimals(data);
        });
    }, []);

    const handleAddAnimal = () => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/')
        .then(res => {return res.json()})
        .then(data => {
            setAnimals([...animals, data])
            console.log(animals);
        })
    }

    return (
        <div>
            <h2>Animals</h2>
            <button onClick={handleAddAnimal}>Add Animal</button>
            <div className="row">
            {animals.map((animals) => (
                <Card 
                 animal={animals}
                 key={animals.id}
                 handleDelete={handleDelete}/>
            ))}
        </div>
        </div>

      );
}

 
export default Home;