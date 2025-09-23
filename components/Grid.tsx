import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{id:1,title:'Title1',description:'Desc1'},{id:1,title:'Title1',description:'Desc1'},{id:1,title:'Title1',description:'Desc1'}].map
            ((item) => ( // the item is the array {}  
                <BentoGridItem 
                id={item.id}
                key = {item.id}
                title={item.title}
                description = {item.description}
                />
            ))
            
            }
        </BentoGrid>
    </section>
)
}

export default Grid