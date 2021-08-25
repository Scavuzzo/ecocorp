import Map from './map.js'
import credencials from './credencials'
// `https://maps.googleapis.com/maps/api/js?v=3exp&key=${key}` 

const Footer = () => {
    const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3exp&key=${credencials.mapsKey}`;

    return (
        <footer className="footer"> 
            <div className="footer__map">
                <h4>NUESTRAS SUCURSALES</h4>
                <Map
                    googleMapURL={mapUrl}
                    containerElement={<div style={{ height: '80%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                    loadingElement={<p>Cargando</p>}
                />
            </div>
            <div className="footer__redes">
                <div className="footer__info">
                    <h4>INFORMACIÓN</h4>
                    <p>Tel: <a href="tel:+549341341341">+549341341341</a></p>
                    <p>Email: <a href="mailto:info@ecocorp.com">info@ecocorp.com</a></p>
                </div>
                <div className="footer__redes_container">
                    <ul>
                        <li key={0}><a href="http://wa.me/919911111111" target="_blank" rel="noreferrer"><i className="icon-whatsapp"></i></a></li>
                        <li key={1}><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="icon-instagram"></i></a></li>
                        <li key={2}><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="icon-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;