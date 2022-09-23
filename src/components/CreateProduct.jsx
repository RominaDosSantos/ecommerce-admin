import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");
  const [images, setImages] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const admin = useSelector((state) => state.login.token);
  const MySwal = withReactContent(Swal);

  function alertCreate() {
    MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>The product is created!</i>,
      icon: "success",
    });
  }

  function inputRequired() {
    MySwal.fire({
      title: "Error!",
      text: "All fields are required.",
      icon: "error",
      confirmButtonText: "Cancel",
    });
  }

  const createProduct = async () => {
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_DB_HOST}/admin`,
      data: {
        productName: productName,
        description: description,
        category: category,
        price: price,
        stock: stock,
        featured: featured,
        image: images,
      },
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${admin.token}`,
      },
    });
    alertCreate();
    navigate("/admin");
    return response;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form
        className="my-5 border rounded p-5 col-8"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <div className="d-flex justify-content-between">
          <div className="col-5">
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                required
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                placeholder="Product name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Descripción"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option></option>
                <option value="1">Inside</option>
                <option value="2">Outside</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Precio"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                required
                onChange={(e) => setStock(e.target.value)}
                type="number"
                placeholder="Stock"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Featured</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                onChange={(e) => setFeatured(e.target.value)}
              >
                <option></option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-5">
            <Form.Group className="mb-3">
              <Form.Label>Image 1</Form.Label>
              <Form.Control
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImages((prev) => [...prev, e.target.files[0]]);
                }}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image 2</Form.Label>
              <Form.Control
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImages((prev) => [...prev, e.target.files[0]]);
                }}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image 3</Form.Label>
              <Form.Control
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImages((prev) => [...prev, e.target.files[0]]);
                }}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image 4</Form.Label>
              <Form.Control
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImages((prev) => [...prev, e.target.files[0]]);
                }}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image 5</Form.Label>
              <Form.Control
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImages((prev) => [...prev, e.target.files[0]]);
                }}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Button
            variant="success"
            type="submit"
            onClick={(e) => {
              if (
                !productName ||
                !description ||
                !category ||
                !price ||
                !stock ||
                !featured
              ) {
                inputRequired();
              } else {
                e.preventDefault();
                createProduct();
              }
            }}
          >
            Add product
          </Button>
          <Link to="/admin" className="btn btn-primary">
            Back
          </Link>
        </div>
      </Form>
    </div>
  );
};
