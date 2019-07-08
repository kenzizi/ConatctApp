import React,{useState} from 'react';
import './App.css';
import Searchbar from './Components/Searchbar'
import Contactcard from'./Components/contactCard'
import CreateContact from'./Components/createContactModal'


function App() {
  const [formData,SetformData] = useState({
    name:"",
    lastname:"",
    email:"",
    contacts:[{name: "karim", lastname: "kenzizi", email: "contact.kenzizi@gmail.com"},{name: "jhon", lastname: "doe", email: "Jdoe@mail.com"}],
    searchbox:""
  })
  const {name,email,lastname,contacts,searchbox} = formData

  const handleInputs = e => {
    const {name,value} = e.target
    SetformData({...formData,[name]:value})
    console.log(formData)
  }
  const addContact = () => {
    SetformData({...formData,contacts:contacts.concat({name,lastname,email})})
  }
  const deleteContact = (key) => {
  
    SetformData({...formData,contacts: contacts.filter((el,i)=> {
      return i!==key?true:false
    })})
  }
   const handleModify = index => {
    let ModArr =contacts.map((el,i) => {
      return i===index?el={name,lastname,email}:el
    })
    SetformData({...formData,contacts:ModArr})
   }
  return (
    <div className="App">
      <Searchbar handleInputs={handleInputs} />
      <CreateContact buttonLabel="New Contact" handleInputs={handleInputs} addContact={addContact} />
      <div className="contacts-container">

      {contacts
        .filter(el => {
          return el.name.toLowerCase().includes(searchbox.toLowerCase().trim())
        })
        .map((el,i) => {
          return <Contactcard contact ={el} key={i} id={i} deleteContact={deleteContact} handleInputs={handleInputs} handleModify={handleModify} />
        })}
      </div>
    </div>
  );
}

export default App;
