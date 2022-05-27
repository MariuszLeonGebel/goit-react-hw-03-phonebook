import './ContactList.css';

export default function ContactList({contactList, deletePerson}) {
  
  const renderList = contactList.map(contact => <li key={contact.id} >{contact.name}: {contact.nr} <button onClick={() => deletePerson(contact.id)}>Delete</button></li>)

  return (
    <div className="contact__div">
      <ul className="contact__list">{renderList}</ul>
    </div>
  )
}