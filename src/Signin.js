function Signin() {
  const registerUser = (e) => {
    e.preventDefault()

    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      password: e.target.password.value,
    }
    if (e.target.password.value === e.target.confirmpassword.value) {
      fetch("http://localhost:4000/user/insert", {
        method: "POST",
        headers: {
          "Accept": "appliction/json",
          "content-type": "application/json"
        },
        body: JSON.stringify(user)
      }

      )
    }
    else {
      alert("password dosents match")
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className=" d-flex align-items-center justify-content-center" style={{ height: "350px", width: "400px", border: "solid", borderRadius: "30px" }}>
          <div><h1 className="text-center">signin</h1>

            <form method="post" onSubmit={(e) => { registerUser(e) }}>
              <div className="d-flex justify-content-center">
                <input type="text" name="username" placeholder='username' style={{ width: "280px", height: "30px", borderRadius: '50px', textAlign: 'center', fontSize: "20px" }}></input>
              </div><br></br>

              <div className="d-flex justify-content-center">
                <input type="text" name="email" placeholder='email' style={{ width: "280px", height: "30px", borderRadius: '50px', textAlign: 'center', fontSize: "20px" }}></input>
              </div><br></br>
              <div className="d-flex justify-content-center">
                <input type="text" name="password" placeholder='password' style={{ width: "280px", height: "30px", borderRadius: '50px', textAlign: 'center', fontSize: "20px" }}></input>
              </div><br></br>
              <div className="d-flex justify-content-center">
                <input type="text" name="confirmpassword" placeholder='confirmpassword' style={{ width: "280px", height: "30px", borderRadius: '50px', textAlign: 'center', fontSize: "20px" }}></input>
              </div><br></br>
              <div className="d-flex justify-content-center">
                <input type="text" name="contact" placeholder='phone number' style={{ width: "280px", height: "30px", borderRadius: '50px', textAlign: 'center' }}></input>
              </div><br></br>
              <input type="submit" value="Signup" />
            </form>
            <div className='d-flex justify-content-center'>
              <button style={{ width: "250px", height: "40px", borderRadius: '50px', textAlign: 'center', backgroundColor: "black", color: "white" }}>create</button></div>


          </div><br></br>
        </div>
      </div>
    </>
  )
}
export default Signin;