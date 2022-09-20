export const Login = () => {
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
                      <button className="btn btn-primary">Login</button>
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
