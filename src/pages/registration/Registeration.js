import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import axios from "axios";





function Registration() {
    const navigate = useNavigate();
    const defaultvalue = {
        name: "",
        checkbox: false,
        email: "",
        radio:"",
        password:"",
    }

    const Register = yup.object().shape({
        name: yup.string().required("please enter ur name"),
        checkbox: yup.boolean().oneOf([true], "please check this box"),
        email: yup.string().required("enter mail"),
       radio: yup.string().required("please select gender"),
        password:yup.string().min(6,"minimum six character").required("set ur password")
    });

    const send = (values) => {
        console.log(values);
        const url="http://localhost:4000/registration";
        axios.post(url,{
            name:values.name,
            checkbox:values.checkbox,
            email:values.email,
            radio:values.radio,
            password:values.password
        })
        localStorage.setItem("name",values.name);
        localStorage.setItem("email",values.email);
        localStorage.setItem("password",values.password);
          navigate("/login");
    };

    return (

        <>

        <Formik initialValues={defaultvalue} validationSchema={Register} onSubmit={send}>
            <div className="b">
            <div class="center bg-color  text-light">
                <h1 class="text-center">REGISTER</h1>
                <Form>
                    <div class="form-group text-field">
                        <Field class="form-control" type="text" name="name" placeholder="Name" />
                        <p className="text-danger"><ErrorMessage name="name" /></p>
                    </div>
                    <div class="form-group text-field">
                        <Field class="form-control" type="email" name="email" placeholder="Email" />
                        <p className="text-danger"><ErrorMessage name="email" /></p>
                    </div>
                    <div class="form-group text-field">
                        <Field class="form-control" type="text" name="password" placeholder="Password" />
                        <p className="text-danger"><ErrorMessage name="password" /></p>
                    </div>
                    <div className="form-group mt-3 row justify-content-around">
                        <div className="form-check col-4">
                            <Field type="radio" className="form-check-input" name="radio" value="male" />male
                        </div>
                        <div className="form-check col-4">
                            <Field type="radio" className="form-check-input" name="radio" value="female" />Female
                        </div>
                        <div className="form-check col-4">
                            <Field type="radio" className="form-check-input" name="radio" value="other" />other
                        </div>
                        <p className="text-danger"><ErrorMessage name="radio" /></p>
                    </div>
                        <div className="form-group mt-3">
                            <div className="form-check">
                                <lable for="check" className="form-check-lable pl-3">all info. is right</lable>
                                <Field type="checkbox" className="form-check-input" name="checkbox" id="check" />
                                <p className="text-danger"><ErrorMessage name="checkbox" /></p>
                            </div>
                        </div>
                        <button class="btn btn-primary w-100" type="submit">Register</button>
                </Form>
            </div>
            </div>
        </Formik>
        </>

    );
}

export default Registration;