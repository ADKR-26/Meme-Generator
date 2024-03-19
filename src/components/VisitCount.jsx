import { useEffect, useState } from "react";
import axios from "axios";

const VisitCount = () => {

    const [visitData, setVisitData] = useState(0);

    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`
                    )
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === "OK") {
                                const place = data.results[0].formatted_address;
                                setLocation(place);
                            } else {
                                setLocation("Could not retrieve place information.");
                            }
                        });
                },
                error => {
                    setLocation(`Error: ${error.message}`);
                }
            );
        } else {
            setLocation("Geolocation is not supported by this browser.");
        }
    }, []);

    const postData = async () => {
        try {
            const response = await axios.post('https://counter-api.onrender.com/counter', {
                name: 'meme-app',
            });
            setVisitData(response.data.newData.visits);
            console.log("DATA", response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        postData();
    }, []);

    return (
        <div>
            <div style={{ color: 'white', padding: '1rem' }}>
                <h2 style={{ fontSize: '1rem' }}>Visit Count: {visitData}</h2>
                {/* <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{visitData}</p> */}
                <h1>Your current location is:</h1>
                <p>{location}</p>
            </div>
        </div>
    )
}

export default VisitCount