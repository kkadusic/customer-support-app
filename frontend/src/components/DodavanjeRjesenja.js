import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import '../css/rjesenje.css'

const UnosRjesenja = () => {
    const history = useHistory();

    return (
        <div className="prozor" >
            <DeleteOutlined className="kantica" onClick={() => { history.goBack(); }} />
            <h1 className="unos-rjesenja">ID zahtjeva</h1><br />
            <div className="sadrzaj">
                <h2>Naslov*</h2>
                <input placeholder="Naslov rješenja"></input>
                <br/>
                <h2>Rješenje*</h2>
                <textarea rows="15"></textarea>
                <button className="spasi">Spasi</button>
            </div>
        </div>
    );
}

export default UnosRjesenja;