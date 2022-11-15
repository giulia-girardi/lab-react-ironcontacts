import logo from './logo.svg';
import './App.css';
import contactsJSON from './contacts.json';

const fiveContacts = contactsJSON.slice(0, 5)

function App() {

  return (
    <div className="App">
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
              <tr>
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
