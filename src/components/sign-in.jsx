import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { useVariable } from "./AppContext.jsx";

//library Yup and formik
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SigninForm() {
  const { users, setUserName } = useVariable();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Enter a valid email"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must contain at least 8 characters"),
    }),
    onSubmit: (values) => {
      if (users.some((user) => user.email === values.email)) {
        for (let user of users) {
          if (
            user.email === values.email &&
            user.password === values.password
          ) {
            setUserName(user.firstName);
          } else {
            alert("Password is incorrect");
          }
        }
      } else {
        alert("This account does not exist, please register");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="formLogin">
      <div className="row">
        <div className="form-group col-md-5 offset-md-1">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="form-group col-md-5">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            className="form-control"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="d-flex justify-content-center my-3">
          <Button variant="primary" type="submit" className="m-2">
            Submit
          </Button>
          <Button variant="secondary" as={Link} to="/register" className="m-2">
            Register
          </Button>
        </div>
      </div>
    </form>
  );
}
