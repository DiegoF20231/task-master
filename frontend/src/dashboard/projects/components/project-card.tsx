import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,

    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { ProjectProgress } from './project-progress'
import { CheckSquare } from 'lucide-react'



export const ProjectCard = () => {
    return (
        <Card>
            <CardHeader className='flex justify-between items-center'>

                <CardTitle>Brand Identity Redesign</CardTitle>
                <button className='rounded-full text-[10px] font-bold uppercase bg-red-600/90 px-1 py-1.5'>High Priority</button>

            </CardHeader>
            <CardContent>
                <p>Creating a fresh visual identity for the TaskMaster mobile application including logos and guidelines.</p>
            </CardContent>
            <CardFooter className='flex flex-col gap-3'>
                <ProjectProgress />
                <div className='flex gap-2 items-center justify-between w-full'>
                    <div className='flex gap-2'>

                        <CheckSquare className='' />
                        <p className='text-muted-foreground'>15/20 Tasks</p>
                    </div>
                    <Button>View Project</Button>
                </div>


            </CardFooter>
        </Card>
    )
}
