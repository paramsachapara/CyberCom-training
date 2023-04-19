import React from "react";
import { useFormik } from "formik";
const initialValues = {
  name: "",
  email: "",
  message: "",
};

const onSubmit = (values) => {
  console.log("formvalues", values);
};

const validate = (values) => {
  let error = {};
  if (!values.name) {
    error.name = "required";
  }
  if (!values.email) {
    error.email = "required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) {
    error.email = "invalid";
  }
  if (!values.message) {
    error.message = "required";
  }
  return error;
};

const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.error("formik error", formik.errors);
  return (
    <>
      <form
        className="d-flex justify-content-center"
        style={{ width: "500px", marginLeft: "500px" }}
        onSubmit={formik.handleSubmit}
      >
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">
            Name
          </label>
          <input
            type="text"
            id="form4Example1"
            name="name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {/* {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null} */}

          {formik.errors.name && formik.touched.name && (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          )}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example2">
            Email address
          </label>
          <input
            type="email"
            id="form4Example2"
            name="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">
            Message
          </label>
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.meaasge}
          ></textarea>
          {formik.errors.message ? (
            <div style={{ color: "red" }}>{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </>
  );
};

export default Login;
