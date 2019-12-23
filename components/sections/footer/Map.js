import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

const Map = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBNbNit47OnRXUkMomHp0kaGWy_WUc20X8"
    })

    const fastBoxCoords = { lat: -5.81116653, lng: -35.21086514 };


    return isLoaded ? <GoogleMap zoom={16} center={fastBoxCoords} mapContainerStyle={{ width: '100%', maxWidth: '500px', height: '250px' }}>
        <Marker position={fastBoxCoords} title={"Oficina FastBox"} />
    </GoogleMap> : null;
};

export default Map;