import React, { useState } from 'react';
import { message, Modal } from 'antd';
import { deleteCertificate } from "../../utilities/serverCall";
import { useHistory } from "react-router";
import { parseDate } from "../../utilities/date";
import './rjesenje.css';

const Certifikat = (props) => {
    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        try {
            await deleteCertificate(props.id);
            message.success("Certifikat obrisan", 3);
        } catch (error) {
            message.warning("Greska prilikom brisanja certifikata", 3);
        }
        setIsModalVisible(false);
        history.push('/');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="prozor-cert">
            <div className="sadrzaj">
                <h2>Naslov certifikata</h2>
                <input type="text" value={props.naslov} disabled/>
                <br/>
                <h2>Odgovorna organizacija</h2>
                <input type="text" value={props.org} disabled/>
                <br/>
                <h2>Datum izdavanja</h2>
                <input type="text" value={parseDate(props.datum)} disabled/>
                {
                    props.uredjivanje &&
                    <button className="spasi" onClick={showModal}>
                        Obriši certifikat
                    </button>
                }
            </div>
            <Modal title="Potvrda brisanja" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Da li ste sigurni da želite obrisati certifikat {props.naslov}?</p>
            </Modal>
        </div>
    );
}

export default Certifikat;
