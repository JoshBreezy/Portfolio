import React from 'react';
import {Col} from 'reactstrap';
import { PROJECTS } from './shared/projects';
import CustomCard from './CustomCard';


export default function MobProj() {


    return (
        <>
            <div className='row flex-nowrap overflow-auto' style={{scrollBehavior: 'smooth'}}>
                {PROJECTS.map(({...project}) => (
                    <Col key={project.id} xs={9} md={5} lg={4}>
                        <CustomCard project={project} />
                    </Col>
                ))}
            </div>
        </>
    )
}