import "./loginForm.css"
export default function LoginForm(){
    return(
        <div className="login-form-wrapper">
            <h1 className="login-title">Login</h1>
            <form action="POST">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}