import './Content.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Content = () => {

    const [persons, setPersons] = useState([]);
    const [data, setData] = useState({
        names: "", telephone: "", image: ""
    });

    const newContact = async () => {
        await axios.post('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project', {
            "names": data.names,
            "telephone": data.telephone,
            "image": data.image
        });
    }


    const getPersons = async () => {
        const allPersons = [];
        try {
            const response = await axios.get('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project');
            allPersons.push(...response.data);
        } catch (error) {
            console.log('Error fetching persons:', error);
        }


        console.log(allPersons);
        setPersons(allPersons);
    };


    useEffect(() => {
        getPersons()
        newContact()
    }, [])

    
    return (
        <div className='content'>
            {
                persons.map((person, index) => (
                    <Card key={index} sx={{ maxWidth: 300, backgroundColor: 'beige' }} className="card">
                        <CardActionArea>
                            <img className="img-fluid rounded-pill" width='200' height='200' src={person.image} alt={person.names} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {person.names}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {person.telephone}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </div>
    )
}