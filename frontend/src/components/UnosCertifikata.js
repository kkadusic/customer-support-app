import React from 'react';
import '../css/rjesenje.css'
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

const UnosCertifikata = () => {
    const history = useHistory();

    return (<div className="prozor">
        <DeleteOutlined className="kantica" onClick={() => { history.goBack(); }} />
        <h1 className="unos-rjesenja">Ime agenta</h1><br />
        <div className="sadrzaj">
            <h2>Naslov certifikata*</h2>
            <input type="text" placeholder="Naslov certifikata"></input>
            <br />
            <h2>Odgovorna organizacija*</h2>
            <input type="text" placeholder="Naslov certifikata"></input>
            <br />
            <h2>Datum izdavanja*</h2>
            <input type="date"></input>
            <br />
            <button className="spasi">Spasi</button>
        </div>
    </div>);
}

export default UnosCertifikata;