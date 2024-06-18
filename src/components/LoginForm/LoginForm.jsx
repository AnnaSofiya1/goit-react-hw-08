import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

export default function LoginForm() {
    const dispatch = useDispatch();

    const Validator = Yup.object().shape({
        email: Yup.string().email("Invalid email address!").required("Required!"),
        password: Yup.string().required("Required!"),
    })

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Validator}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label className={css.label}>
                    Email
                    <Field className={css.input} type="text" name="email" autocomplete />
                    <ErrorMessage className={css.error} name="email" component="div" />
                </label>
                <label className={css.label}>
                    Password
                    <Field className={css.input} type="text" name="password" autocomplete />
                    <ErrorMessage className={css.error} name="password" component="div" />
                </label>
                <button className={css.btn} type="submit">Log In</button>
            </Form>
        </Formik>
    );
}