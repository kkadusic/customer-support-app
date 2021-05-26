import React, {useState} from 'react'
import './register.css'
import validator from 'validator'
import axios from 'axios'

const Register = () => {
    const [user, setUser] = useState({
        city: '',
        country: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        username: ''
    })
    const mapper = {
        city: 'Grad ', country: 'Država', email: 'Email', firstName: 'Ime',
        lastName: 'Prezime', password: 'Šifra', phoneNumber: 'Broj telefona', username: 'Korisničko ime'
    }

    const [fieldStyle, setFieldStyle] = useState({
        city: false,
        country: false,
        email: false,
        firstName: false,
        lastName: false,
        password: false,
        phoneNumber: false,
        username: false
    })

    const [disableButton, setDisableButton] = useState(false)
    const [errorLabel, setErrorLabel] = useState("")


    const handleChange = (e) => {
        const {name, value} = e.target
        setFieldStyle(fieldStyle => ({...fieldStyle, [name]: false}))
        setUser(user => ({...user, [name]: value}))

    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        let terminate = false
        Object.entries(fieldStyle).forEach((entry) => {
            const [key, value] = entry
            if (value) {
                setErrorLabel("Input fields contain invalid data!")
                terminate = true
            }
        })

        if (terminate) return;
        let postData = user
        postData["roleName"] = "ROLE_EMPLOYEE"
        axios.post("http://localhost:8081/auth/registration", postData).then(
            (respDat) => {
                window.location.href = '/login'
            }
        ).catch(err => {
            setErrorLabel(!err.response ? "Server is not available" : JSON.stringify(err.response?.data?.message))
        })
    }


    const validateString = (e) => {
        const {name, value} = e.target
        if (!checkString({name: name, value: value})) setFieldStyle(fieldStyle => ({...fieldStyle, [name]: true}))
    }

    const checkString = ({name, value}) => {
        if (!value) return false

        switch (name) {
            case "password":
                if (value.length < 8 || value.length > 120) return false
                break
            case "email":
                if (!validator.isEmail(value)) return false
                break
            default:
                if (value.length < 3 || value.length > 50) return false
        }
        return true
    }

    const handleClick = (e) => {
        const {name, value} = e.target
        setFieldStyle(fieldStyle => ({...fieldStyle, [name]: false}))
    }


    return (
        <div id="div-forma">
            <div className="upper-section">
                <p id="naslov-reg-forme">Registracija</p>
                <div id="redir-login">
                    <p id="redir-login-desc">Već imate korisnički račun?</p>
                    <button id="redir-login-button" onClick={event => window.location.href = '/login'}>Prijavi se
                    </button>
                </div>

            </div>
            <p id="instructions">Da biste se registrovali popunite ovu formu!</p>
            <form onSubmit={onSubmitForm}>
                <div id="div-forma-grid">
                    <div className="div-cell">
                        <p className="div-title">Ime *</p>
                        <input type="text" name="firstName" onClick={handleClick} onChange={handleChange}
                               value={user.firstName} onBlur={validateString}
                               className={fieldStyle.firstName ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Prezime *</p>
                        <input type="text" name="lastName" onClick={handleClick} onChange={handleChange}
                               value={user.lastName} onBlur={validateString}
                               className={fieldStyle.lastName ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Korisničko ime *</p>
                        <input type="text" name="username" onClick={handleClick} onChange={handleChange}
                               value={user.username} onBlur={validateString}
                               className={fieldStyle.username ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Email adresa *</p>
                        <input type="text" name="email" onClick={handleClick} onChange={handleChange} value={user.email}
                               onBlur={validateString} className={fieldStyle.email ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Broj telefona *</p>
                        <input type="text" name="phoneNumber" onClick={handleClick} onChange={handleChange}
                               value={user.phoneNumber} onBlur={validateString}
                               className={fieldStyle.phoneNumber ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Šifra *</p>
                        <input type="password" name="password" onClick={handleClick} onChange={handleChange}
                               value={user.password} onBlur={validateString}
                               className={fieldStyle.password ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Grad *</p>
                        <input type="text" name="city" onClick={handleClick} onChange={handleChange} value={user.city}
                               onBlur={validateString} className={fieldStyle.city ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Država *</p>
                        <input type="text" name="country" onClick={handleClick} onChange={handleChange}
                               value={user.country} onBlur={validateString}
                               className={fieldStyle.country ? "val-style" : ""}></input>
                    </div>
                </div>
                <button id="register-button" value="Submit" className={disableButton ? "dis-class" : ""}>Registriraj
                    se
                </button>
            </form>
            <p className="errorcls">{errorLabel}</p>
        </div>
    )
}

export default Register
