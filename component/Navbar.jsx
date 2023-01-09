import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/todo">Todo</Link>
    </div>
  )
}

export default Navbar