import Modal from 'react-modal';
import EditForm from '../EditForm/EditForm';
import css from './ToEdit.module.css'

Modal.setAppElement('#root');

export default function ToEdit({ isOpen, onRequestClose, initialValues }) {
    return (
        <>
            <Modal className={css.container}
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            >
                <h2 className={css.title}>Edit your contact</h2>
                <EditForm
                    initialValues={initialValues}
                    onRequestClose={onRequestClose} />
            </Modal>
        </>
    )
}