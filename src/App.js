import logo from './logo.svg';
import './App.css';
import contactsJSON from './contacts.json';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const fiveContacts = contactsJSON.slice(0, 5)
const remainingContacts = contactsJSON.slice(6,contactsJSON.length)


function App() {
  
  
  const [contacts, setContact] = useState(fiveContacts)

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts[randomIndex]
    const contactsWithoutDuplicates = remainingContacts.splice(randomIndex + 1)
    console.log(contactsWithoutDuplicates)
    setContact([...contacts, randomContact])
  }

  const sortPopularity = () => {
    let copyContacts = [...contacts]
    let sortedContacts = copyContacts.sort((a, b) => b.popularity - a.popularity)
    setContact(sortedContacts)
  }

  const sortAlphabetically = () => {
    let copyContacts = [...contacts]
    let sortedContacts = copyContacts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
    setContact(sortedContacts)
  }

  const deleteItem = (id) => {
    let copyContacts = [...contacts]
    let listWithoutDeleted = copyContacts.filter((item) => item.id !== id)
    setContact(listWithoutDeleted)
  }

  return (
    <div className="App">
      <button onClick={addRandom}>Add random contact</button>
      <button onClick={sortPopularity} >Sort by popularity</button>
      <button onClick={sortAlphabetically}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts && contacts.map((contact)=> {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl}/></td>
                <td><p>{contact.name}</p></td>
                <td><p>{(contact.popularity).toFixed(2)}</p></td>
                <td><p>{contact.wonOscar ? "🏆" : ""}</p></td>
                <td><p>{contact.wonEmmy ? "🏆" : ""}</p></td>
                <td><button onClick={()=> deleteItem(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
