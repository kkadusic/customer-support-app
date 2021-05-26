import React from 'react'
import './profil.css'
import {getUser, updateUser} from '../../utilities/localStorage'
import {useState} from 'react'
import axios from 'axios'
import {config} from '../../utilities/serverCall'
const Profil = () => {
    const [userData, setUserData] = useState(getUser())
    const [errorLabel, setErrorLabel] = useState("")
    const [fieldStyle, setFieldStyle] = useState({city: false, country: false, firstName: false, lastName: false, phoneNumber: false })
    
    const checkString = ({name, value}) => {
        return (value.length < 3 || value.length > 50);
    }

    const validateString = (e) => {
        const {name, value} = e.target
        if (checkString({name: name, value: value})) setFieldStyle(fieldStyle => ({...fieldStyle, [name]: true}))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
     
        setFieldStyle(fieldStyle => ({...fieldStyle, [name]: false}))
        setUserData(user => ({...user, [name]: value}))
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
        let putData = {id: Number(userData.id), city: userData.city, country: userData.country,
             firstName: userData.firstName, lastName:  userData.lastName, phoneNumber: userData.phoneNumber }
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
                        <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.firstName ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Prezime </p>
                        <input type="text" name="lastName"  value={userData.lastName} onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.lastName ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Korisničko ime </p>
                        <input type="text" name="username" value={userData.username} className="dis-btn" disabled></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Email adresa </p>
                        <input type="text" name="email" value={userData.email} className="dis-btn" disabled></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Broj telefona </p>
                        <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.phoneNumber ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Grad </p>
                        <input type="text" name="city" value={userData.city} onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.city ? "val-style" : ""}></input>
                    </div>
                    <div className="div-cell">
                        <p className="div-title">Država </p>
                        <input type="text" name="country"  value={userData.country} onChange={handleChange} onBlur={validateString}
                               className={fieldStyle.country ? "val-style" : ""}></input>
                    </div>
                </div>
                <button id="update-btn" value="Submit" >Ažuriraj profil</button>
             </form>
               <p id="error-label">{errorLabel}</p>
            </div>
    )
};

export default Profil;
