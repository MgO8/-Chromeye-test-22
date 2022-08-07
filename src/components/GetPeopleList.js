import React, { useState, useEffect } from 'react';
import '../App.css';
import PeopleTable from './PeopleTable'
import axios from "axios"

function GetPeopleList() {
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
        <PeopleTable people={people} />
    )
}


export default GetPeopleList;
