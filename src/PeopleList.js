import React, { useState, useEffect } from 'react';
import './App.css';
import PeopleListTable from './PeopleListTable'
import axios from "axios"

function PeopleList() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        getAllPeople()
    }, []);

    const getAllPeople = () => {
        axios.get('/people', {
            headers: {
                'header': 'content-type: application/json'
            }
        })
            .then((response) => {
                setPeople(response.data)
            })
    }
    return(
        <PeopleListTable people={people} />
    )
}


export default PeopleList;
