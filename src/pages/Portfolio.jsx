import  Project  from '../components/Project';
import data from '../assets/data/data';
export default function Portfolio(){
    return(
        <div>
            <h1>My Portfolio</h1>
            <Project data={data}/>
        </div>
    )
}