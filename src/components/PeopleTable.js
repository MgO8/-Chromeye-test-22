import React, { useState, useMemo } from 'react';
import PagePagination from './PagePagination';
import '../App.css';
import PeopleTablePage from './PeopleTablePage';

function PeopleTable(props) {
  const { people } = props

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(3);

  // filtration
  const filteredPeople = useMemo(
    () =>
      people.filter((person) => {
        return (
          person.firstName.toLowerCase().includes(search.toLowerCase()) ||
          person.lastName.toLowerCase().includes(search.toLowerCase())
        );
      }),
    [people, search]
  );

  // pagination
  const lastPersonIndex = currentPage * peoplePerPage;
  const firstPersonIndex = lastPersonIndex - peoplePerPage;
  const currentPeopleList = filteredPeople.slice(firstPersonIndex, lastPersonIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

// per page 
  const handleSelectChange = (e) => {
    setCurrentPage(1)
    setPeoplePerPage(e.target.value)
  }

  return (
    <div>
      <div className="Navbar">
        <input className="SearchInput"
          type="text"
          placeholder="Enter keyword"
          value={search}
          onChange={(e) => {setCurrentPage(1); setSearch(e.target.value)}}
        />
        <PagePagination
          peoplePerPage={peoplePerPage}
          totalPeople={filteredPeople.length}
          paginate={paginate}
        />
        <div className="SelectContainer">
          <p>People per page</p>
          <select onChange={handleSelectChange} className="Select">
            <option value="1">1</option>
            <option value="3" selected>3</option>
            <option value="5">5</option>
            <option value={people.length}>All</option>
          </select>
        </div>
      </div>
      {!filteredPeople.length ? (
        <p>Nothing was found. :(</p>
      ) : (
        <PeopleTablePage filteredPeople={currentPeopleList}></PeopleTablePage>
      )}
    </div>
  );
}

export default PeopleTable;