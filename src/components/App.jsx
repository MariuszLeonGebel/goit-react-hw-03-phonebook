import React, {useState, useEffect} from 'react';
import AddContacts from './AddContacts/AddContacts';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from "nanoid";
import {dataStorage} from '../dataStorage.js';

export const App = () => {  
  const [persons, setPersons] = useState(() => dataStorage.getDataStorage('contacts') ?? [],)
  const [copyPersons, setCopyPersons] = useState([])
  const [name, setName] = useState("")
  const [nr, setNr] = useState("")
  const [filt, setFilt] = useState("")
 
  function addContact() {
    if (persons.find(person => person.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
      setName("")
      setNr("")
      return
    }
    
    setPersons(prev => [...prev, { id: nanoid(), name, nr }])
    setCopyPersons(prev => [...prev, { id: nanoid(), name, nr }])
    setName("")
    setNr("")
  }

  useEffect(() => {
   console.log("Jestem w useEffect-set ", persons)
    localStorage.setItem('contacts', JSON.stringify(persons))
  }, [persons])

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleTelChange(e) {
    setNr(e.target.value)
  }

  function deletePerson(contactId) {  
    const pos = persons.map(function(e) { return e.id; }).indexOf(contactId);
    const newFriends = [...persons]
    newFriends.splice(pos, 1)
    setPersons(newFriends)
    setCopyPersons(newFriends)
  }

  function filterChange(e) { 
    const currentFilter = e.target.value
    setFilt(currentFilter)
    handleFilterChange(currentFilter)    
  }

  function handleFilterChange(filtr) {
    setPersons(copyPersons.filter(person => person.name.toUpperCase().includes(filtr.toUpperCase())))    
  }

  const styles = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: "30px",
        fontSize: 16,
        color: '#010101'
  }

  return (
    <div style={styles}>     
      <h2>Phonebook</h2>
      <AddContacts nameChange={handleNameChange} telChange={handleTelChange} addingContact={addContact} name={name} nr={nr} />
      <h2 style={{marginTop: "35px"}}>Contacts</h2>
      <Filter filter={filterChange} name={filt}/>
      <ContactList contactList={persons} deletePerson={deletePerson}/>
    </div>
  );
};
