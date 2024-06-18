import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { patchContact } from "../../redux/contacts/operations";
import css from './EditForm.module.css'


export default function EditForm({ initialValues, onRequestClose }) {

    const dispatch = useDispatch();

    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().required("Required"),
    })

    const handleSubmit = (values) => {
        dispatch(patchContact(values));
        onRequestClose();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Validator}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div>
                    <label className={css.label} htmlFor="name" >Name</label>
                    <Field className={css.field} type="text" name="name"></Field>

                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div>
                    <label className={css.label} htmlFor="number" >Number</label>
                    <Field className={css.field} type="text" name="number"></Field>

                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>
                <button className={css.btn} type="submit">Edit contact</button>
            </Form>
        </Formik>
    )
}