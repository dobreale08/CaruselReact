import './Carusel.css'

function CaruselImage(props){
    return (
        <div className='carusel-image-container'>
            <div className='carusel-image'>
                <img src={props.image.image}></img>
            </div>
            <h2>{props.image.title}</h2>
        </div>
    )
}
export default CaruselImage;