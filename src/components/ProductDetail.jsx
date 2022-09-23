import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { slug } = useParams();
  const [productName, setProductName] = useState(product.id);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [featured, setFeatured] = useState(product.featured);
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");
  const [imageDetailOne, setImageDetailOne] = useState("");
  const [imageDetailTwo, setImageDetailTwo] = useState("");
  const [loading, setLoading] = useState(false);

  const admin = useSelector((state) => state.login.token);

  const MySwal = withReactContent(Swal);
  function alerUpdate() {
    MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>Your product is modified!</i>,
      icon: "success",
    });
  }

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
        image: [
          { imageOne },
          { imageTwo },
          { imageThree },
          { imageDetailOne },
          { imageDetailTwo },
        ],
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
    setImageOne(file.secure_url);
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
    setImageTwo(file.secure_url);
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
    setImageThree(file.secure_url);

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
    setImageDetailOne(file.secure_url);

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
    setImageDetailTwo(file.secure_url);
    setLoading(false);
  };

  function deleteImagen(index) {
    setImageOne("");
    setProduct({
      ...product,
      image: product.image.map((el, i) => {
        if (i === index) {
          return undefined;
        }
        return el;
      }),
    });
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
            {product?.image ? (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Image 1</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Imágenes"
                    onChange={upLoadImage}
                  />
                  <div className="d-flex w-100">
                    {loading ? (
                      <div className="loading">Loading&#8230;</div>
                    ) : (
                      <div>
                        <img
                          className="imgCloudinary"
                          src={imageOne ? imageOne : product.image[0]?.imageOne}
                        />
                      </div>
                    )}
                    <div className="d-flex justify-content-center align-items-center w-25">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteImagen(0)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image 2</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Imágenes"
                    onChange={upLoadImage2}
                  />
                  <div className="d-flex w-100">
                    {loading ? (
                      <div className="loading">Loading&#8230;</div>
                    ) : (
                      <div>
                        <img
                          className="imgCloudinary"
                          src={imageOne ? imageOne : product.image[1]?.imageTwo}
                        />
                      </div>
                    )}
                    <div className="d-flex justify-content-center align-items-center w-25">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteImagen(1)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image 3</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Imágenes"
                    onChange={upLoadImage3}
                  />
                  <div className="d-flex w-100">
                    {loading ? (
                      <div className="loading">Loading&#8230;</div>
                    ) : (
                      <div>
                        <img
                          className="imgCloudinary"
                          src={
                            imageOne ? imageOne : product.image[2].imageThree
                          }
                        />
                      </div>
                    )}
                    <div className="d-flex justify-content-center align-items-center w-25">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteImagen(2)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </Form.Group>
                <Form.Label>Image 4</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Imágenes"
                  onChange={upLoadImage4}
                />
                <div className="d-flex w-100">
                  {loading ? (
                    <div className="loading">Loading&#8230;</div>
                  ) : (
                    <div>
                      <img
                        className="imgCloudinary"
                        src={
                          imageOne ? imageOne : product.image[3].imageDetailOne
                        }
                      />
                    </div>
                  )}
                  <div className="d-flex justify-content-center align-items-center w-25">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteImagen(3)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Image 5</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Imágenes"
                    onChange={upLoadImage5}
                  />
                  <div className="d-flex w-100">
                    {loading ? (
                      <div className="loading">Loading&#8230;</div>
                    ) : (
                      <div>
                        <img
                          className="imgCloudinary"
                          src={
                            imageOne
                              ? imageOne
                              : product.image[4].imageDetailTwo
                          }
                        />
                      </div>
                    )}
                    <div className="d-flex justify-content-center align-items-center w-25">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteImagen(4)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </Form.Group>
              </>
            ) : (
              <h1>Cargando...</h1>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Button
            variant="success"
            type="submit"
            onClick={() => {
              editProduct();
              alerUpdate();
            }}
          >
            <Link to="/admin" className="submitUpdate">
              {" "}
              Submit
            </Link>
          </Button>
          <Link to="/admin" className="btn btn-primary">
            Back
          </Link>
        </div>
      </Form>
    </div>
  );
};
