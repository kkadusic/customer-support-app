import React from 'react'
import './profil.css'
import {getUser, updateUser} from '../../utilities/localStorage'
import {useState} from 'react'
import axios from 'axios'
import {config} from '../../utilities/serverCall'
import {useHistory} from 'react-router-dom'

const Profil = () => {
    const [userData, setUserData] = useState(getUser())
    const [errorLabel, setErrorLabel] = useState("")
    const [fieldStyle, setFieldStyle] = useState({
        city: false,
        country: false,
        firstName: false,
        lastName: false,
        phoneNumber: false
    });
    const history = useHistory();

    const lgIn = () => history.push("/login");

    const checkString = ({value}) => {
        return (value.length < 3 || value.length > 50);
    }

    const validateString = (e) => {
        const {name, value} = e.target
        if (checkString({name: name, value: value})) setFieldStyle(fieldStyle => ({...fieldStyle, [name]: true}))
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFieldStyle(fieldStyle => ({...fieldStyle, [name]: false}));
        setUserData(user => ({...user, [name]: value}));
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        let terminate = false
        Object.entries(fieldStyle).forEach((entry) => {
            const [, value] = entry
            if (value) {
                setErrorLabel("Input fields contain invalid data!")
                terminate = true
            }
        })

        if (terminate) return;
        let putData = {
            id: Number(userData.id), city: userData.city, country: userData.country,
            firstName: userData.firstName, lastName: userData.lastName, phoneNumber: userData.phoneNumber
        }
        axios.put("http://localhost:8081/auth/profil", putData, config()).then(() => {
                alert("Successfully updated!");
                updateUser(putData);
                setErrorLabel("");
            }
        ).catch(err => {
            setErrorLabel(!err.response ? "Server is not available" : JSON.stringify(err.response?.data?.message))
        })

    }

    return (
        <div className="outer-profil">
            Profil
            <form onSubmit={onSubmitForm}>
                <div className="grid-profil">
                    <div className="div-cell">
                        <p className="div-title">Ime </p>
                        <input type="text" name="firstName" value={userData ? userData.firstName : lgIn()}
                               onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.firstName ? "val-style" : ""}/>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Prezime </p>
                        <input type="text" name="lastName" value={userData ? userData.lastName : lgIn()}
                               onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.lastName ? "val-style" : ""}/>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Korisničko ime </p>
                        <input type="text" name="username" value={userData ? userData.username : lgIn()}
                               className="dis-btn" disabled/>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Email adresa </p>
                        <input type="text" name="email" value={userData ? userData.email : lgIn()} className="dis-btn"
                               disabled/>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Broj telefona </p>
                        <input type="text" name="phoneNumber" value={userData ? userData.phoneNumber : lgIn()}
                               onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.phoneNumber ? "val-style" : ""}/>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Grad </p>
                        <input type="text" name="city" value={userData ? userData.city : lgIn()} onChange={handleChange}
                               onBlur={validateString}
                               className={fieldStyle.city ? "val-style" : ""}/>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Država </p>
                        <input type="text" name="country" value={userData ? userData.country : lgIn()}
                               onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.country ? "val-style" : ""}/>
                    </div>
                </div>
                <button id="update-btn" value="Submit">Ažuriraj profil</button>
            </form>
            <p id="error-label">{errorLabel}</p>
        </div>
    )
};

export default Profil;
