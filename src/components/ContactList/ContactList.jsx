import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from './ContactList.module.css'


const ContactList = () => {

    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li className={css.item} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
}

export default ContactList;