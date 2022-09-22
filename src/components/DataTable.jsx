import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const DataTable = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [tidy, setTidy] = useState("");
  const MySwal = withReactContent(Swal);

  const admin = useSelector((state) => state.login.token);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/admin`,
        headers: { Authorization: `Bearer ${admin.token}` },
      });

      setProducts(result.data);
    };
    getProducts();
  }, [refresh]);

  function orden(a, b) {
    if (tidy === "1") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  }
  const orderedProducts = products.sort(orden);

  const deleteProduct = async (id) => {
    await alertDelete();
    const response = await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_DB_HOST}/admin/${id}`,
      headers: { Authorization: `Bearer ${admin.token}` },
    });
    setRefresh(!refresh);
    return response;
  };

  async function alertDelete(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success rounded-pill ms-3",
        cancelButton: "btn btn-danger rounded-pill",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your file has not been deleted.",
            "error"
          );
        }
      });
  }
  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/create" className="btn btn-success">
          Agregar
        </Link>
      </div>
      <div>
        <label htmlFor="">ORDEN</label>
        <select name="" id="" onChange={(e) => setTidy(e.target.value)}>
          <option value="" selected disabled hidden>
            Select order..
          </option>
          <option value="1">ASC</option>
          <option value="2">DESC</option>
        </select>
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
                    to={`/product/${product.slug}`}
                    className="btn btn-outline-secondary rounded-pill"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <button
                    to="#"
                    className="btn btn-outline-secondary ms-1 rounded-pill"
                    onClick={() => {
                      alertDelete(product.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
