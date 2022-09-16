import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const DataTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products`,
      });
      setProducts(result.data);
      console.log(result.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success">Agregar</button>
      </div>

      <Table striped bordered id="datatablesSimple">
        <thead>
          <tr>
            <th>id</th>
            <th>productName</th>
            <th>description</th>
            <th>price</th>
            <th>stock</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.description.slice(0, 100) + "..."}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td className="d-flex">
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <Link to="#" className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
