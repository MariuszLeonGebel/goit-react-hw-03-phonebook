import './AddContacts.css';

export default function AddContacts({nameChange, name, telChange, nr, addingContact}) {
  
  return (
    <div className="addContacts">
      
      <form className="form">

        <h4 className="form__title">Name</h4>

        <input
          className="form__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={nameChange}
          value={name}
          required />
        
        <h4 className="form__title">Number</h4>

        <input
          className="form__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={telChange}
          value={nr}
          required />
        
        <button className="form__btn" type="button" onClick={addingContact}>
          Add contact
        </button>   
        
      </form>
    </div>
  )
}