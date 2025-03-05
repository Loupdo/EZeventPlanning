import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// import components
import NavBar from "../routes/NavBar.jsx";

//import Context
import { useVariable } from "../Context/AppContext.jsx";

//library Yup and formik
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Register() {
  const { users, setUsers } = useVariable();

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const navigate = useNavigate();
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    //yup library use for validation
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required").max(15, "Name is too long"),
      lastName: Yup.string().required("Required").max(20, "Name is too long"),
      email: Yup.string().required("Required").email("Enter a valid email"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must contain at least 8 characters")
        .matches(/.*[a-z].*/, "Must contain a lower case letter")
        .matches(/.*[A-Z].*/, "Must contain an upper case letter")
        .matches(/.*[0-9].*/, "Must contain a number")
        .matches(
          /.*[_=!#$%&()*+,-.:'/?@].*/,
          "Must contain a special characters"
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Mismatched passwords"
      ),
    }),
    onSubmit: (values) => {
      if (users.some((user) => user.email === values.email)) {
        alert("You already have an account");
      } else {
        addUser({ ...values });
        navigate("/");
        console.log(users);
      }
    },
  });

  return (
    <div className="container">
      <NavBar />
      <form onSubmit={formik.handleSubmit} className="formRegister">
        <div className="row">
          <div className="form-group col-md-5 offset-md-1">
            <label htmlFor="firstName">First Name*:</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="error">{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="lastName">Last Name*:</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="error">{formik.errors.lastName}</p>
            ) : null}
          </div>

          <div className="form-group col-md-10 offset-md-1">
            <label htmlFor="email">Email Address*:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="form-group col-md-5 offset-md-1">
            <label htmlFor="password">Password*:</label>
            <input
              id="password"
              name="password"
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="confirmPassword">Confirm password*:</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              className="form-control"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="error">{formik.errors.confirmPassword}</p>
            ) : null}
          </div>
        </div>
        <div className="d-flex justify-content-center my-3">
          <Button variant="info" type="submit" className="justify-self-center">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
