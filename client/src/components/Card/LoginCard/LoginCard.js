import {Link} from 'react-router-dom';
import './LoginCard.css';
import {useState} from 'react';
import axios from 'axios';

const LoginCard = (props) => {
    const [loginUser, setLoginUser] = useState({email: "", password: ""})

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/users/login", loginUser, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                setLoginUser({email: "", password: ""})
            }
            ).catch(err => {
                console.log(err);
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="login__card__container">
                <div className="login__card">
                    <div className="login__header">
                        <h1>Login</h1>
                    </div>
                    <div className="login__inputs">
                        <div className="email__input__container input__container">
                            <label className="email__label input__label">Email</label>
                            <input type="email" name='email' className="email__input login__input" placeholder='example@gmail.com' onChange={e => setLoginUser({...loginUser, email: e.target.value})} value={loginUser.email} />
                        </div>
                        <div className="password__input__container input__container">
                            <label className="password__label input__label" >Password</label>
                            <input type="password" name='password' className="password__input login__input" placeholder='**********' onChange={e => setLoginUser({...loginUser, password: e.target.value})} value={loginUser.userName} />
                        </div>
                        <div className="login__button__container">
                            <button className="login__button" >LOGIN</button>
                        </div>
                    </div>
                    <div className="login__other__actions">
                        <div className="login__forgot__password">Forgot password?</div>
                        <div className="login__new__account">Don't have account? <Link to="/account/register">Create account</Link> </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginCard;