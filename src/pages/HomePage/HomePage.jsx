import css from './HomePage.module.css'

export default function HomePage() {
    return (
        <div className={css.container}>
            <h1>
                Welcome to the Phonebook App
            </h1>
            <p>Manage your contacts </p>
        </div>
    );
}