import React, { useContext } from "react";
import dataContext from "../../Context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Table from "../../Components/Table/Table";
import "./Add.scss"
import {Helmet} from "react-helmet";

const Add = () => {
  const { data, setData, handleSearch} = useContext(dataContext);
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      desc: "",
      price: "",
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Required"),
      name: Yup.string()
        .max(70, "Must be 70 characters or less")
        .required("Required"),
      desc: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
      price: Yup.number().required("Required"),
    }),
    onSubmit: values => {
      axios.post("http://localhost:8080/users", values).then((res) => {
        setData([...data, values]);
      });
      formik.resetForm();
    },
  });
  return (
    <div className="addPage">
      <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="image"></label>
        <input placeholder="Image"
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div>{formik.errors.image}</div>
        ) : null}

        <label htmlFor="name"></label>
        <input placeholder="Name"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="desc"></label>
        <input placeholder="Description"
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.desc}
        />
        {formik.touched.desc && formik.errors.desc ? (
          <div>{formik.errors.desc}</div>
        ) : null}

        <label htmlFor="price"></label>
        <input placeholder="Price"
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <button type="submit">Submit</button>
        <div className="search-inp">
            <input type="Search" placeholder="Search" onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
        
      </form>
      <Table/>
    </div>
  );
};

export default Add;
