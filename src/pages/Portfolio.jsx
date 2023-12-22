import { Project } from '../components/Project';
import {mydata} from '../assets/data/data';
function Portfolio(){
    return(
        <div>
            <h1>My Portfolio</h1>
            <project data={mydata}/>
        </div>
    )
}