import React, { useState } from 'react'
import type { Filter, FilterOption } from '../types/projects.type'
import { cn } from '@/lib/utils'

export const ProjectFilters = () => {
    const [selectedOption, setSelectedOption] = useState<FilterOption>('all')

    const filters: Filter[] = [
        { label: 'All Projects', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Archived', value: 'archived' },
    ]
    return (
        <>
            {filters.map((filter) => (
                <button key={filter.value} className={cn(
                    "pb-2 cursor-pointer font-medium transition-all relative",
                    selectedOption === filter.value
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground border-b-2 border-transparent hover:text-primary"
                )} onClick={() => setSelectedOption(filter.value)}>{filter.label}</button>
            ))}
        </>

    )
}
