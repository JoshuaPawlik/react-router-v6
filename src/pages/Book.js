import React from 'react'
import { useParams } from 'react-router-dom'

export function Book() {
  const { id } = useParams()
  return <div>Book {id} </div>
}

