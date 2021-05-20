import React from 'react';
import '../css/pretraga.css';
import {SearchOutlined} from '@ant-design/icons';

const Pretraga = () => {
    return(
        <div className="pretraga">
            
            <select>
                <option value="softver">Softver</option>
                <option value="hardver">Hardver</option>
                <option value="ostalo">Ostalo</option>
            </select>
            <div className="search">
            <input type="text" placeholder="Pretraga"></input>
            <SearchOutlined className="ikona"/>
            </div>
            <div className="pocisti"/>
        </div>
    );
}

export default Pretraga;