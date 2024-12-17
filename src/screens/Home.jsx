export function Home(){
    return (
        <div className="row">
        <div className="col"></div>
        <div className="col">
            <h1>Login</h1>
            <h1>Version v1.0</h1>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="text" className="form-control" />
            </div>
            <div>
              <button className="btn btn-success mt-5">Login</button>
            </div>
        </div>
        <div className="col">
        </div>
      </div>
    )
}