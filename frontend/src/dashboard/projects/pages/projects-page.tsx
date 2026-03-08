import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

import { ProjectFilters } from '../components/project-filters'
import { ProjectCard } from '../components/project-card'



export const ProjectsPage = () => {

    return (
        <section className='flex flex-col gap-2.5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Projects</h1>
                <Button>
                    <Plus />
                    New Project</Button>
            </div>
            <div className='flex gap-4'>

                <ProjectFilters />

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

            </div>

        </section>
    )
}
