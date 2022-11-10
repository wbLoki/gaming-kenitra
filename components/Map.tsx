import React, { useMemo, useState } from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from '@react-google-maps/api';
import { MdOutlineLocationOn } from 'react-icons/md';

type Props = {}

const center = {
    lat: 34.26065895847693,
    lng: -6.5874761201336
};

export default function Map ({}: Props) {
const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || "",
});

  return (
    <div>
        {!isLoaded ? <div>Loading...</div> : <MyMap />}
    </div>
  )
}


function MyMap() {
    const [zoomLevel, setZoomLevel] = useState(16)
    var zoom = useMemo(() => (zoomLevel), [zoomLevel]);
    return (<GoogleMap
    zoom={zoom}
    center={center}
    mapContainerClassName="ml-auto w-full h-[50vh]" >
        <Marker position={center} onLoad={() => { setTimeout(() => setZoomLevel(18), 5000) }} />
    </GoogleMap>);
};