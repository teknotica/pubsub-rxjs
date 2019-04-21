import React from "react";
import { Formik } from "formik";

import { publish } from "./PubSub";
import { CONSENT_SUBMITTED } from "../constants";

const Button = () => (
  <Formik
    initialValues={{ name: "" }}
    onSubmit={() => publish(CONSENT_SUBMITTED, { submitted: true })}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    )}
  </Formik>
);

export default Button;
