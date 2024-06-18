import Modal from 'react-modal';
import css from './ToDelete.module.css'

Modal.setAppElement('#root');

export default function ToDelete({ isOpen, onRequestClose, onConfirm, contactName }) {
    return (
        <>
            <Modal className={css.container}
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            >
                <h2 className={css.title}>Confirm Delete</h2>
                <p className={css.text}>Are you sure you want to delete {contactName}?</p>
                <div className={css.wrapper}>
                    <button className={css.btn} onClick={onConfirm}>Yes</button>
                    <button className={css.btn} onClick={onRequestClose}>No</button>
                </div>
            </Modal>
        </>
    )
}