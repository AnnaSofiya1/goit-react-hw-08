import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations.js'
import { selectError, selectIsLoading } from '../../redux/contacts/selectors.js';

import ContactList from '../../components/ContactList/ContactList.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import css from './ContactsPage.module.css'

export default function ContactsPage() {
    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.container}>
            {isLoading && <p>Loading contacts...</p>}
            {error && <p>{error}</p>}
            <h1 className={css.title}>Phonebook</h1>
            <div className={css.wrapper}>
                <div className={css.forms}>
                    <SearchBox />
                    <ContactForm />
                </div>
                <ContactList />
            </div>
        </div>
    )
}