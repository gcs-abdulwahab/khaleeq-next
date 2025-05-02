'use client'

import { useActionState, startTransition, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { handleFormSubmit } from './actions'

const initialState = {
    success: false,
    message: ''
}

export default function NoorPage() {
    const [state, action] = useActionState(handleFormSubmit, initialState)
    const [text, setText] = useState('')
    const [selectedOption, setSelectedOption] = useState('')
    const [isInterested, setIsInterested] = useState('false')

    const handleClick = () => {
        const formData = new FormData()
        formData.append('text', text)
        formData.append('option', selectedOption)
        formData.append('interested', isInterested)
        startTransition(() => {
            action(formData)
        })
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Noor Page</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text here..."
                        className="w-full"
                    />
                    <Select value={selectedOption} onValueChange={setSelectedOption}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="space-y-2">
                        <Label>Are you interested?</Label>
                        <RadioGroup 
                            value={isInterested} 
                            onValueChange={setIsInterested}
                            className="flex gap-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="true" id="interested-yes" />
                                <Label htmlFor="interested-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="false" id="interested-no" />
                                <Label htmlFor="interested-no">No</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button 
                        onClick={handleClick}
                        className="w-full"
                    >
                        Submit
                    </Button>
                    {state.message && (
                        <p className="text-sm text-gray-600 mt-2">{state.message}</p>
                    )}
                </CardContent>
            </Card>
        </div>
    )
} 