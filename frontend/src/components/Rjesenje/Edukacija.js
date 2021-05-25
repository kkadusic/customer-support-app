import React, {useState} from 'react';
import './rjesenje.css'
import {useHistory} from "react-router";
import {deleteEducation} from "../../utilities/serverCall";
import {message, Modal} from "antd";

const Edukacija = (props) => {
    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        try {
            const id = await deleteEducation(props.id);
            message.success("Edukacija obrisana", 3);
        } catch (error) {
            message.warning("Greska prilikom brisanja edukacije");
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
                <h2>Obrazovna institucija</h2>
                <input type="text" value={props.ustanova} disabled/>
                <br/>
                <h2>Stepen edukacije</h2>
                <input type="text" value={props.stepen} disabled/>
                <br/>
                <h2>Naučna oblast</h2>
                <input type="text" value={props.oblast} disabled/>
                <br/>
                <h2>Datum početka</h2>
                <input type="text" value={props.datumPocetka} disabled/>
                <br/>
                <h2>Datum završetka</h2>
                <input type="text" value={props.datumKraja} disabled/>
                {
                    props.uredjivanje &&
                    <button className="spasi" onClick={showModal}>
                        Obriši edukaciju
                    </button>
                }
            </div>
            <Modal title="Potvrda brisanja" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Da li ste sigurni da želite obrisati edukaciju od ustanove {props.ustanova} iz oblasti {props.oblast} sa stepenom {props.stepen}?</p>
            </Modal>
        </div>
    );
}

export default Edukacija;
