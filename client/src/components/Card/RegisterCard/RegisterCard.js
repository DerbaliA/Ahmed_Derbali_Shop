import {Link} from 'react-router-dom';
import './RegisterCard.css';
import React, {useState} from "react";
import axios from 'axios';

const RegisterCard = (props) => {
    const [newUser, setNewUser] = useState({userName: "", email: "", password: "", confirmPassword: ""})

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/users/register", newUser, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                setNewUser({userName: "", email: "", password: "", confirmPassword: ""})
            }
            ).catch(err => {
                console.log(err);
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="register__card__container">
                <div className="register__card">
                    <div className="register__header">
                        <h1>Create Account</h1>
                    </div>

                    <div className="register__inputs">
                        <div className="fname__input__container reg__input__container">
                            <label className="fname__label input__label">User name</label>
                            <input type="text" name='userName' className="fname__input register__input" onChange={e => setNewUser({...newUser, userName: e.target.value})} value={newUser.userName} />
                        </div>

                        <div className="email__input__container reg__input__container">
                            <label className="email__label input__label">Email</label>
                            <input type="email" name='email' className="email__input register__input" placeholder='example@gmail.com' onChange={e => setNewUser({...newUser, email: e.target.value})} value={newUser.email} />
                        </div>

                        <div className="password__input__container reg__input__container">
                            <label className="password__label input__label">Password</label>
                            <input type="password" name='password' className="password__input register__input" onChange={e => setNewUser({...newUser, password: e.target.value})} value={newUser.password} />
                        </div>

                        <div className="password__input__container reg__input__container">
                            <label className="password__label input__label">Confirm Password</label>
                            <input type="password" name='confirmPassword' className="password__input register__input" onChange={e => setNewUser({...newUser, confirmPassword: e.target.value})} value={newUser.confirmPassword} />
                        </div>

                        <div className="register__button__container">
                            <button className="register__button" ><Link to="/account/login" /> Create Account</button>
                        </div>
                    </div>

                    <div className="register__other__actions">
                        <div className="register__login__account">Already have account? <Link to="/account/login">Login</Link></div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default RegisterCard;