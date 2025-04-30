'use server'

export async function handleClick() {
  console.log(`Button clicked on server with time ${new Date().toISOString()} `);
  
  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return { message: 'Server action completed!' };
}

export async function handleFormSubmit(prevState: any, formData: FormData) {
    const text = formData.get('text') as string
    const color = formData.get('color') as string

    console.log('Server received:')
    console.log('Text:', text)
    console.log('Color:', color)
    
    return {
        success: true,
        message: `Received text: ${text} and color: ${color}`
    }
}


