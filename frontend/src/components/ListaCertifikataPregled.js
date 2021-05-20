import React from 'react';
import '../css/certifikati-edukacije.css'
import Certifikat from './Certifikat';

const ListaCertifikataPregled = (props) => {
    let certifikat = {naslov:'Naslov certifikata', organizacija:"Naziv odgovorne organizacije", datum:"01/01/2021"}
return (<div className="grid-certifikata">
    <Certifikat naslov={certifikat.naslov} org={certifikat.organizacija} datum={certifikat.datum}></Certifikat>   
    <Certifikat naslov={certifikat.naslov} org={certifikat.organizacija} datum={certifikat.datum}></Certifikat>   
    <Certifikat naslov={certifikat.naslov} org={certifikat.organizacija} datum={certifikat.datum}></Certifikat>   
    <Certifikat naslov={certifikat.naslov} org={certifikat.organizacija} datum={certifikat.datum}></Certifikat>      
    
  {props.uredjivanje && <button className="dodaj">Dodaj certifikat</button>}
  </div>
  );
}

export default ListaCertifikataPregled;