import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { login } from "../redux/config/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("123");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  async function loginAdmin() {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/login`,
      data: {
        email,
        password,
      },
    });
    dispatch(
      login({
        token: response.data.token,
      })
    );
    navigate("/admin");
  }

  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">
                      Login
                    </h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="inputEmail"
                          type="email"
                          placeholder="name@example.com"
                          name="email"
                          defaultValue={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label forHtml="inputEmail">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          name="password"
                          defaultValue={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label forHtml="inputPassword">Password</label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          id="inputRememberPassword"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          forHtml="inputRememberPassword"
                        >
                          Remember Password
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <Link
                          onClick={() => loginAdmin()}
                          className="submitUpdate"
                        >
                          Entrar
                        </Link>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
