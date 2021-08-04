import React from 'react';
import MountainItem from './MountainItem';


export default function MountainContainer({mountains}) {

    const showMountains = () => {
        return mountains.map(mountain => <MountainItem key={mountain.id} {...mountain} />)
    }

    return(
        <ul>
            Mountain Container
                {showMountains()}
        </ul>
    )
}