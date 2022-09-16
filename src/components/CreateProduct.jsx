import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

export const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");
  const [image1, setImage1] = useState(
    "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(2).JPG"
  );
  const [image2, setImage2] = useState(
    "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(2).JPG"
  );
  const [image3, setImage3] = useState(
    "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(2).JPG"
  );
  const [image4, setImage4] = useState(
    "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(2).JPG"
  );
  const [image5, setImage5] = useState(
    "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(2).JPG"
  );

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
                // onChange={(e) => setImage1(e.target.value)}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 2</Form.Label>
              <Form.Control
                // onChange={(e) => setImage2(e.target.value)}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 3</Form.Label>
              <Form.Control
                // onChange={(e) => setImage3(e.target.value)}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 4</Form.Label>
              <Form.Control
                // onChange={(e) => setImage4(e.target.value)}
                type="file"
                placeholder="Imágenes"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imágen 5</Form.Label>
              <Form.Control
                // onChange={(e) => setImage5(e.target.value)}
                type="file"
                placeholder="Imágenes"
              />
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
