import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { projects } from '@/data/projects'

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {
                    projects.map((project) => (
                        <BentoGridItem 
                            id={project.id}
                            key={project.id}
                            title={project.title} 
                            description={project.description}
                        />
                    ))
                }
            </BentoGrid>
        </section>
    )
}

export default Grid