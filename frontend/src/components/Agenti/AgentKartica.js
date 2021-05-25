import React, {useState} from 'react';
import {useHistory} from 'react-router';
import './agenti.css';
import {deleteEmployee} from "../../utilities/serverCall";
import {message, Modal} from "antd";

const AgentKartica = ({agent}) => {

    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        try {
            const id = await deleteEmployee(agent.id);
            message.success("Agent obrisan", 3);
        } catch (error) {
            message.warning("Greska prilikom brisanja agenta");
        }
        setIsModalVisible(false);
        history.push('/');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="kartica-agent">
            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                 alt="profilna"
            />
            <div className="ime-zvanje">
                <h2 className="ime-prezime-agent">{agent.firstName} {agent.lastName}</h2>
                {/*<p className="zvanje-agent">Agent</p>*/}
            </div>
            <button className="pregled"
                    onClick={() => {
                        history.push({
                            pathname: '/pregledagenta',
                            state: {agent: agent}
                        });
                    }}
            >
                Pregled
            </button>
            <button className="uredi"
                    onClick={() => {
                        history.push({
                            pathname: '/urediagenta',
                            state: {agent: agent}
                        });
                    }}
            >
                Uređivanje
            </button>
            <button className="brisi" onClick={showModal}>
                Brisanje
            </button>
            <Modal title="Potvrda brisanja agenta" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Da li ste sigurni da želite obrisati agenta {agent.firstName} {agent.lastName}?</p>
            </Modal>
        </div>
    );
}

export default AgentKartica;
