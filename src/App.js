import logo from './logo.svg';
import './App.css';
import contactsJSON from './contacts.json';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const fiveContacts = contactsJSON.slice(0, 5)
const remainingContacts = contactsJSON.slice(6,contactsJSON.length)


function App() {
  const randomIndex = Math.floor(Math.random() * remainingContacts.length)
  const randomContact = contactsJSON[randomIndex]
  const [contact, setContact] = useState('0')
  return (
    <div className="App">
      <button onClick={()=> setContact(fiveContacts.push(randomContact))}>Add random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((contact)=> {
            return (
              <tr key={uuidv4()}>
                <td><img src={contact.pictureUrl}/></td>
                <td><p>{contact.name}</p></td>
                <td><p>{(contact.popularity).toFixed(2)}</p></td>
                <td><p>{contact.wonOscar ? "🏆" : ""}</p></td>
                <td><p>{contact.wonEmmy ? "🏆" : ""}</p></td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
