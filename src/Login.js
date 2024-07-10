function Login() {
    const loginUser = (e) => {
        e.preventDefault()

        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        fetch("http://localhost:4000/user/login", {
            method: "post",
            headers: {
                "Accept": "appliction/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((res => res.json()))
                .then((data)=> {
                       if(data.userfound){
                            alert("sucess")
                       }
                       else{
                           alert("fail")
                       }
                }
    )
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center justify-content-center" style={{ height: "300px", width: "400px", border: "solid", borderRadius: "30px" }}>
                    <div>
                        <h1 className="text-center">login</h1><br></br>
                        <form method="get" onSubmit={(e) => { loginUser(e) }}>

                            <div className="d-flex justify-content-center">
                                <input type="text" name="username"placeholder='username' style={{ width: "280px", height: "30px", borderRadius: '50px', textAlign: 'center',fontSize:"20px" }}></input>
                            </div><br></br>
                            <div className="d-flex justify-content-center">
                                <input type="text" name="password" placeholder='password' style={{ width: "280px", height: "30px", borderRadius: '50px', textAlign: 'center',fontSize:"20px" }}></input>
                            </div><br></br>
                            <input type="submit"   value="login"/>
                        </form>
                        <div className='d-flex justify-content-center'>
                            <button style={{ width: "250px", height: "40px", borderRadius: '50px', textAlign: 'center', backgroundColor: "black", color: "white" }}>login</button></div><br></br>
                            <div className="d-flex justify-content-around">
                    <div>facebook login</div>
                    <div>google login</div>
                </div>
                    </div><br></br>
                    
                </div>

                
            </div>

        </>
    )
}
export default Login;