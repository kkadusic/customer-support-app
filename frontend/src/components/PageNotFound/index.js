import './pageNotFound.css';

const PageNotFound = () => {
    return (
        <div>
            <img src="https://i.imgur.com/qIufhof.png" alt="" className="page-not-found-image"/>
            <div>
                <h1>404</h1>
                <p className="page-not-found-text">Ova stranica nije pronađena</p>
            </div>
        </div>
    );
}

export default PageNotFound;
