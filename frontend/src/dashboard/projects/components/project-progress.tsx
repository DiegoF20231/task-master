

import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

export const ProjectProgress = () => {
    return (
        <Field className="w-full max-w-sm">
            <FieldLabel htmlFor="progress-upload">
                <span>Project Progress</span>
                <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress value={66} id="progress-upload" />
        </Field>
    )
}

