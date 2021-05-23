import React from 'react';
import './pretraga.css';
import {SearchOutlined} from '@ant-design/icons';

const Pretraga = (props) => {

    return (
        <div className="pretraga">
            <div className="search">
                <input type="text" placeholder="Pretraga"/>
                <SearchOutlined className="ikona"/>
            </div>
            <div className="pocisti"/>
        </div>
    );
}

export default Pretraga;
