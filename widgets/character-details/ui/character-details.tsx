'use client'

import React from 'react'
import { useGetCharactersByIdQuery } from '@/features/fetchCharacters/fetchCharactersSlice' 

interface Props {
  id: number
}

export const CharacterDetails = ({ id }: Props) => {
  const { data, isLoading, isError } = useGetCharactersByIdQuery(id)

  if (isLoading) return <div className="text-white">Загрузка...</div>
  if (isError || !data) return <div className="text-white">Ошибка загрузки</div>

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <img src={data.image} alt={data.name} className="rounded-lg mb-4 w-full h-auto" />
      <p>Status: {data.status}</p>
      <p>Gender: {data.gender}</p>
      <p>Location: {data.location.name}</p>
      <p>Origin: {data.origin.name}</p>
    </div>
  )
}
