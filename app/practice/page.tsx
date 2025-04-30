'use client'

import { useActionState, startTransition } from 'react'
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
import { handleFormSubmit } from './actions'
import { useState } from 'react'

const initialState = {
    success: false,
    message: ''
}

export default function PracticePage() {
    const [state, action] = useActionState(handleFormSubmit, initialState)
    const [text, setText] = useState('')
    const [color, setColor] = useState('')

    const handleClick = () => {
        const formData = new FormData()
        formData.append('text', text)
        formData.append('color', color)
        startTransition(() => {
            action(formData)
        })
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Practice Page</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text here..."
                        className="w-full"
                    />
                    <Select value={color} onValueChange={setColor}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a color" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="red">Red</SelectItem>
                            <SelectItem value="green">Green</SelectItem>
                            <SelectItem value="blue">Blue</SelectItem>
                        </SelectContent>
                    </Select>
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

