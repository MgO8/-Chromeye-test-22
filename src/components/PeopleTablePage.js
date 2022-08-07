
import React from 'react';
import '../App.css';

function PeopleTablePage(props) {
    const { filteredPeople } = props

    return (
    <div className="PeopleListTable">
        <div className="PeopleListTable__table">
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">Avatar</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i}>
                            <img height="30px" alt="avatar" src={person.avatar.formats.thumbnail.url}></img>
                        </div>
                    )
                })}
            </div>
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">ID</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i} >{person.id}</div>
                    )
                })}
            </div>
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">First Name</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i} >{person.firstName}</div>
                    )
                })}
            </div>
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">Last Name</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i} >{person.lastName}</div>
                    )
                })}
            </div>
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">Email</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i} >{person.email}</div>
                    )
                })}
            </div>
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">Company</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i} >{person.company.name}</div>
                    )
                })}
            </div>
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">Department</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i} >{person.company.department}</div>
                    )
                })}
            </div>
            <div className="PeopleListTable__table-column">
                <div className="PeopleListTable__table-column-title">Start Date</div>
                {filteredPeople.map((person, i) => {
                    return (
                        <div className="PeopleListTable__table-column-item" key={i} >{person.company.startDate}</div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default PeopleTablePage;