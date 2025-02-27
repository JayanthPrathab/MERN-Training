import axios from "axios";
const loGin=()=>{
    const handleLogin=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/login',{
            email:email,
            password:pass
        })
    }
    return(
        <div>
        <div class="outerbox">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    Email<br /><input type="text" /><br /><br />
                    Password <br /><input type="password" /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}
export default loGin;