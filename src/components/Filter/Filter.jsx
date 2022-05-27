import './Filter.css';

export default function Filter({filter, name}) {
return (

  <div className="filterDiv">

    <h5>Find contacts by name</h5>
    
    <input
      className="form__input-filter"
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={filter}
      value={name}
      required />
    
  </div>
);

}