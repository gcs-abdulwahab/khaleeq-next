'use server'

export async function handleFormSubmit(prevState: any, formData: FormData) {
    const text = formData.get('text') as string
    const option = formData.get('option') as string
    const interested = formData.get('interested') as string

    console.log('Server received:')
    console.log('Text:', text)
    console.log('Option:', option)
    console.log('Interested:', interested)
    
    return {
        success: true,
        message: `Received text: ${text}, option: ${option}, interested: ${interested}`
    }
} 