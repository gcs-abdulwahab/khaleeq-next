import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find what you were looking for.</p>
      <Link href="/" style={{ color: 'blue' }}>Go back home</Link>
    </div>
  )
}

export default NotFound 