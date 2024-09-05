const d = document,
n = navigator

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true, //do the best reading
        timeout: 5000, 
        maximunAge: 0 //forguet previous screenshots
    }

    const success = position => {
        let coords = position.coords
        console.log(position)

        $id.innerHTML = `
            <p>Position:</p>
            <ul>
                <li>Latitude: <b>${coords.latitude}</b></li>
                <li>Longitude: <b>${coords.longitude}</b></li>
                <li>Accuracy: <b>${coords.accuracy} m</b></li>
            </ul>
            <a href = "https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Google Maps</a>
        `
    }

    const error = err => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log("Error" + err)
    }

    n.geolocation.getCurrentPosition(success, error, options)
    //n.geolocation.watchPosition()
}