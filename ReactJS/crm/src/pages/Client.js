import React from "react";
import { useFormik } from "formik";
import { crmSchema } from "../../src/schema/ClientValidation.jsx";

function Client() {
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
  ];
  const initialValues = {
    clientname: "",
    address: "",
    country: "",
    directSales: false,
    consultativeSales: false,
    requestForProposal: false,
    date: "",
    consultant: "",
    email: "",
    option: true,
    totalPrice: 0,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: crmSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row d-flex mt-5">
          <div className="col-md-2">
            <label htmlFor="clientname" className="mt-2">
              Client Name
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="clientname"
              className="form-control"
              id="clientname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.clientname}
            />
            {formik.errors.clientname && formik.touched.clientname ? (
              <p className="text-danger">{formik.errors.clientname}</p>
            ) : null}
          </div>
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label htmlFor="address" className="mt-2">
              Address
            </label>
          </div>
          <div className="col-md-8">
            <textarea
              name="address"
              className="form-control"
              id="address"
              cols="95"
              rows="5"
              placeholder="enter address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            ></textarea>

            {formik.errors.address && formik.touched.address ? (
              <p className="text-danger">{formik.errors.address}</p>
            ) : null}
          </div>
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label htmlFor="country" className="mt-2">
              Country
            </label>
          </div>
          <div className="col-md-4">
            <select
              value={formik.values.country}
              name="country"
              id="country"
              className="form-control"
              onChange={formik.handleChange}
            >
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {formik.errors.country && formik.touched.country ? (
              <p className="text-danger">{formik.errors.country}</p>
            ) : null}
          </div>
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label htmlFor="type" className="mt-2">
              Type
            </label>
          </div>
          <div className="col-md-8 d-flex justify-content-between mt-2">
            <div>
              <input
                type="checkbox"
                name="directSales"
                id="directSales"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.directSales}
                checked={formik.values.directSales}
              />
              <label htmlFor="directSales" className="ms-1">
                Direct Sales
              </label>
              {formik.errors.directSales && formik.touched.directSales ? (
                <p className="text-danger">{formik.errors.directSales}</p>
              ) : null}
            </div>
            <div>
              <input
                type="checkbox"
                name="consultativeSales"
                value={formik.values.consultativeSales}
                id="consultativeSales"
                onChange={formik.handleChange}
              />
              <label htmlFor="consultativeSales" className="ms-1">
                Consultative Sales
              </label>
              {formik.errors.consultativeSales &&
              formik.touched.consultativeSales ? (
                <p className="text-danger">{formik.errors.consultativeSales}</p>
              ) : null}
            </div>
            <div>
              <input
                type="checkbox"
                name="requestForProposal"
                value={formik.values.requestForProposal}
                onChange={formik.handleChange}
                id="requestForProposal"
              />
              <label htmlFor="requestForProposal" className="ms-1">
                Request for proposal
              </label>
              {formik.errors.requestForProposal &&
              formik.touched.requestForProposal ? (
                <p className="text-danger">
                  {formik.errors.requestForProposal}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label htmlFor="date" className="mt-2">
              Date
            </label>
          </div>
          <div className="col-md-4">
            <input
              type="date"
              name="date"
              id="date"
              className="form-control"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.date && formik.touched.date ? (
            <p className="text-danger">{formik.errors.date}</p>
          ) : null}
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label htmlFor="consultant" className="mt-2">
              Consultant
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="consultant"
              className="form-control"
              id="consultant"
              value={formik.values.consultant}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.consultant && formik.touched.consultant ? (
            <p className="text-danger">{formik.errors.consultant}</p>
          ) : null}
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label htmlFor="email" className="mt-2">
              Email
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label className="mt-2">Approved</label>
          </div>
          <div className="col-md-3 d-flex justify-content-between">
            <div>
              <input
                type="radio"
                name="option"
                id="option-yes"
                value={true}
                onChange={formik.handleChange}
                selected={formik.values.option === true}
              />
              <label htmlFor="option-yes" className="ms-1">
                yes
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                id="option-no"
                value={false}
                onChange={formik.handleChange}
                selected={formik.values.option === false}
              />
              <label htmlFor="option-no" className="ms-1">
                no
              </label>
            </div>
          </div>
        </div>

        <div className="row d-flex mt-2">
          <div className="col-md-2">
            <label htmlFor="totalPrice" className="mt-2">
              Total Price
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="number"
              name="totalPrice"
              className="form-control"
              id="totalPrice"
              value={formik.values.totalPrice}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.totalPrice && formik.touched.totalPrice ? (
            <p className="text-danger">{formik.errors.totalPrice}</p>
          ) : null}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-success" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Client;
