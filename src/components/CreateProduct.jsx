import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
    navigate("/admin");
    return response;
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form
        className="my-5 border rounded p-5 col-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="d-flex justify-content-between">
          <div className="col-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                placeholder="Product name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Descripción"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option>Select a category...</option>
                <option value="1">Inside</option>
                <option value="2">Outside</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Precio"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                onChange={(e) => setStock(e.target.value)}
                type="number"
                placeholder="Stock"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Featured</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setFeatured(e.target.value)}
                required
              >
                <option>Select</option>
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </Form.Group>
          </div>
        </div>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
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
              createProduct();
              alertCreate();
            }
          }}
        >
          <button className="submitUpdate">add product</button>
        </Button>
      </Form>
    </div>
  );
};
