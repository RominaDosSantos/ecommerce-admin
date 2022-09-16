import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { slug } = useParams();
  const [productName, setProductName] = useState(product.id);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [featured, setFeatured] = useState(product.featured);
  const [image1, setImage1] = useState("sddsad");
  const [image2, setImage2] = useState("asdsa");
  const [image3, setImage3] = useState("asdsa");
  const [image4, setImage4] = useState("adsa");
  const [image5, setImage5] = useState("asdas");

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_DB_HOST}/product/${slug}`,
      });
      setProduct(result.data);
    };
    getProduct();
  }, []);

  const editProduct = async () => {
    const response = await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_DB_HOST}/admin/${product.id}`,
      data: {
        productName: productName,
        description: description,
        category: category,
        price: price,
        stock: stock,
        featured: featured,
        image: [image1, image2, image3, image4, image5],
      },
    });
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
                type="text"
                placeholder="Product name"
                defaultValue={product.productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción"
                defaultValue={product.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="number"
                placeholder="Category id"
                defaultValue={product.categoryId}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                defaultValue={product.price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Stock"
                defaultValue={product.stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Featured</Form.Label>
              <Form.Control
                type="boolean"
                placeholder="Featured"
                defaultValue={product.featured}
                onChange={(e) => setFeatured(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-5">
            {product.image &&
              product.image.map((img, index) => {
                return (
                  <Form.Group className="mb-3" key={index}>
                    <Form.Label>{`Imágen ${index + 1}`}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Imágenes"
                      defaultValue={Object.values(product.image[index])}
                    />
                  </Form.Group>
                );
              })}
          </div>
        </div>
        <Button variant="primary" type="submit" onClick={() => editProduct()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
