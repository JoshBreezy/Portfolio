import {Container} from 'reactstrap';
import DeskProj from './DeskProj';
import MobProj from './MobProj';
import { isMobile } from 'react-device-detect';


const mob = () => isMobile? <MobProj /> : <DeskProj />;



function Projects() {

    return (
        <Container>
                {mob()}
        </Container>
    )
}

export default Projects;