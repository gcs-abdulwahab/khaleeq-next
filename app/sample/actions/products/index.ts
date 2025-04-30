'use server'

import { revalidatePath } from 'next/cache'

export async function addProduct(formData: FormData) {
  const name = formData.get('name') as string
  const price = Number(formData.get('price'))

  const response = await fetch('http://localhost:3000/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, price }),
  })

  if (!response.ok) {
    throw new Error('Failed to add product')
  }

  revalidatePath('/sample')
}

export async function deleteProduct(productId: number) {
  const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete product')
  }

  revalidatePath('/sample')
}

export async function updateProduct(productId: number, formData: FormData) {
  const name = formData.get('name') as string
  const price = Number(formData.get('price'))

  const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, price }),
  })

  if (!response.ok) {
    throw new Error('Failed to update product')
  }

  revalidatePath('/sample')
}

export async function getProducts() {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
}



