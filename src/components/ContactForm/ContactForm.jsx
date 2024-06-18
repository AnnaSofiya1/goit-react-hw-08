import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from './ContactForm.module.css'


const ContactForm = () => {

    const dispatch = useDispatch();

    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required!"),
        number: Yup.string().required("Required!"),
    })

    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Validator}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.container}>
                    <label className={css.label} htmlFor="name" >Name</label>
                    <Field className={css.field} type="text" name="name"></Field>

                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.container}>
                    <label className={css.label} htmlFor="number" >Number</label>
                    <Field className={css.field} type="text" name="number"></Field>

                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm;