import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_DB_HOST}/product/${id}`,
      });
      console.log(result.data);
      setProduct(result.data);
    };
    getProduct();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="my-5 border rounded p-5 col-8">
        <div className="d-flex justify-content-between">
          <div className="col-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product name"
                defaultValue={product.productName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción"
                defaultValue={product.description}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="number"
                placeholder="Category id"
                defaultValue={product.categoryId}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                defaultValue={product.price}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Stock"
                defaultValue={product.stock}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Featured</Form.Label>
              <Form.Control
                type="boolean"
                placeholder="Featured"
                defaultValue={product.featured}
              />
            </Form.Group>
          </div>

          <div className="col-5">
            {product.image &&
              product.image.map((img, index) => {
                console.log(img);
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
