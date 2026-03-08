export type FilterOption = 'all' | 'active' | 'archived'
export interface Filter {
    label: string
    value: FilterOption
}
export type Priority = 'low' | 'medium' | 'high'
export type Status = 'pending' | 'in-progress' | 'completed'

export interface Project {
    id: string
    title: string
    description: string
    priority: Priority
    status: Status
    createdAt: Date
    updatedAt: Date
}