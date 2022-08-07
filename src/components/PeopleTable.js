import React, { useState, useMemo } from 'react';
import PagePagination from './PagePagination';
import '../App.css';
import PeopleTablePage from './PeopleTablePage';

function PeopleTable(props) {
  const { people } = props

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage] = useState(3);

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
  const lastPostIndex = currentPage * peoplePerPage;
  const firstPostIndex = lastPostIndex - peoplePerPage;
  const currentPeopleList = people.slice(firstPostIndex, lastPostIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <div className="Navbar">
        <input className="SearchInput"
          type="text"
          placeholder="Enter keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <PagePagination
          peoplePerPage={peoplePerPage}
          totalPeople={filteredPeople.length}
          paginate={paginate}
        />
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