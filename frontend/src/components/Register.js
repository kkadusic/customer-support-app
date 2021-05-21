import React from 'react'
import '../css/register.css'

const Register = () => {
    return (
        <div id="div-forma">
            <div className="upper-section">
            <p id="naslov-reg-forme">Registracija</p>
            <div id="redir-login">
                <p id="redir-login-desc">Već imate korisnički račun?</p>
                <button id="redir-login-button" onClick={event =>  window.location.href='/login'}>Prijavi se</button>
            </div>

            </div>
            <p id="instructions">Da biste se registrovali popunite ovu formu!</p>
            <div id="div-forma-grid">
            <input type="text"  ></input>
            <input type="text"  ></input>
            <input type="text"  ></input>
            <input type="text"  ></input>
            <input type="text"  ></input>
            <input type="text"  ></input>
            <input type="text"  ></input>
            <input type="text"  ></input>


            </div>
        </div>
    )
}

export default Register
