import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [loading, setLoading] = useState(false);

  const admin = useSelector((state) => state.login.token);

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
        image: [image1, image2, image3, image4, image5],
      },
      headers: { Authorization: `Bearer ${admin.token}` },
    });
    return response;
  };

  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mdeluca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage1(file.secure_url);
    console.log(file.secure_url);

    setLoading(false);
  };

  const upLoadImage2 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mdeluca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage2(file.secure_url);

    setLoading(false);
  };

  const upLoadImage3 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mdeluca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage3(file.secure_url);

    setLoading(false);
  };

  const upLoadImage4 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mdeluca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage4(file.secure_url);

    setLoading(false);
  };
  const upLoadImage5 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mdeluca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage5(file.secure_url);
    setLoading(false);
  };

  function deleteImagenUno() {
    setImage1("");
  }
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
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Descripción"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                onChange={(e) => setCategory(e.target.value)}
                type="number"
                placeholder="Category id"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Precio"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                onChange={(e) => setStock(e.target.value)}
                type="number"
                placeholder="Stock"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Featured</Form.Label>
              <Form.Control
                onChange={(e) => setFeatured(e.target.value)}
                type="boolean"
                placeholder="Featured"
              />
            </Form.Group>
          </div>

          <div className="col-5">
            <Form.Group className="mb-3">
              <Form.Label>Imágen 1</Form.Label>
              <Form.Control
                onChange={upLoadImage}
                type="file"
                placeholder="Imágenes"
              />
              {loading ? (
                <div className="loading">Loading&#8230;</div>
              ) : (
                <img className="imgCloudinary" src={image1} />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 2</Form.Label>
              <Form.Control
                onChange={upLoadImage2}
                type="file"
                placeholder="Imágenes"
              />
              {loading ? (
                <div className="loading">Loading&#8230;</div>
              ) : (
                <img className="imgCloudinary" src={image2} />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 3</Form.Label>
              <Form.Control
                onChange={upLoadImage3}
                type="file"
                placeholder="Imágenes"
              />
              {loading ? (
                <div className="loading">Loading&#8230;</div>
              ) : (
                <img className="imgCloudinary" src={image3} />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 4</Form.Label>
              <Form.Control
                onChange={upLoadImage4}
                type="file"
                placeholder="Imágenes"
              />
              {loading ? (
                <div className="loading">Loading&#8230;</div>
              ) : (
                <img className="imgCloudinary" src={image4} />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 5</Form.Label>
              <Form.Control
                onChange={upLoadImage5}
                type="file"
                placeholder="Imágenes"
              />
              {loading ? (
                <div className="loading">Loading&#8230;</div>
              ) : (
                <img className="imgCloudinary" src={image5} />
              )}
            </Form.Group>
          </div>
        </div>
        <Button variant="primary" type="submit" onClick={() => createProduct()}>
          Agregar
        </Button>
      </Form>
    </div>
  );
};
