import React, {useState} from 'react';
import bambus from '../assets/bambus.jpg';
import busStation from '../assets/busStation.jpg';
import cat from '../assets/cat.jpg';
import catCharger from '../assets/catCharger.jpg';
import park from '../assets/park.jpg';
import CaruselImage from './CaruselImage.js';
import './Carusel.css';

function Carusel() {
    const photos = [
        {image:bambus, title:"Bamboo jungle next to terrace."}, 
        {image:busStation, title:"On the way to the bus station."}, 
        {image:cat, title:"Yoda adimiring bamboo jungle."}, 
        {image:catCharger, title:"Yoda just found a new source of heat."}, 
        {image:park, title:"First day on the way to the practice office."}
    ];
    const [current, setCurrent] = useState(0); 

    function previousPhoto() {
        if(current <= 0){
            setCurrent(photos.length-1);
        }
        else
            setCurrent(current-1);
    }
    function nextPhoto() {
        if(current >= photos.length-1){
            setCurrent(0);
        }
        else
            setCurrent(current+1);
    }

    function getPhotoIndex(index) {
        var diff = index;
        while(diff > photos.length - 1){
            diff -= photos.length;
        }
        return diff;
    }
    
    return (
        <div className='carusel-content'>
            <button className='previous-button' onClick={previousPhoto} title="Previous">&lt;</button>
            <div className='carusel-images'>
                <CaruselImage image={photos[current]}/>
                <CaruselImage image={photos[getPhotoIndex(current+1)]}/>
                <CaruselImage image={photos[getPhotoIndex(current+2)]}/>
            </div>
            <button className='next-button' onClick={nextPhoto} title="Next">&gt;</button>
        </div>
    );
}
export default Carusel;