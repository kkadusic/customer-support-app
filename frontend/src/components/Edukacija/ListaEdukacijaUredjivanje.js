import React from "react";
import {useHistory} from "react-router";
import "./certifikati-edukacije.css";
import Edukacija from "../Rjesenje/Edukacija";
import {useLocation} from "react-router-dom";

const ListaEdukacijaUredjivanje = () => {
    const history = useHistory();
    const location = useLocation();
    const educations = location.state.agent.educations;

    return (
        <div className="lista">
            <div className="grid-certifikata">
                {!educations.length ? (
                    <>Agent nema edukacija</>
                ) : (
                    <>
                        {educations.map((edukacija) => (
                            <Edukacija
                                id={edukacija.id}
                                ustanova={edukacija.school}
                                stepen={edukacija.degree}
                                oblast={edukacija.fieldOfStudy}
                                datumKraja={edukacija.endDate}
                                datumPocetka={edukacija.startDate}
                                uredjivanje={true}
                            />
                        ))}
                    </>
                )}
            </div>
            <button
                className="dodaj"
                onClick={() => {
                    history.push({
                        pathname: '/unosedukacije',
                        state: {agent: location.state.agent}
                    });
                }}
            >
                Dodaj edukaciju
            </button>
        </div>
    );
};

export default ListaEdukacijaUredjivanje;
