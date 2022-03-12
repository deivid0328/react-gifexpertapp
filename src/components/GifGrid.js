
import { useFethGifs } from '../hooks/useFetchGifs'
// import { getGift } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading }= useFethGifs( category );
  


    return (
        <>
            <h3 className="animate__animated animate__backInLeft" >{category}</h3>

            { loading && <p>Loading</p> }

    

            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }

            </div>
        </>
    )
}

export default GifGrid