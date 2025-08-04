'use client'
import { CharactersCard } from '@/entities/characters-card'
import { useGetCharacterQuery } from '@/features/fetchCharacters/fetchCharactersSlice'
import React from 'react'

export const MainList = () => {
  const { data, isFetching, isError } = useGetCharacterQuery({ page: 1 })
  return (
    <div className={` py-[81px] max-w-[1440px] mx-auto ${!isFetching || !isError ? 'grid grid-cols-3 gap-[20px]' : ''}`}>
      {isFetching ? (
        <div className='text-[33px] text-white mx-auto w-fit'>loading...</div>
      ) : isError ? (
        <h2>Произошла ошибка, уже работаем над исправлением</h2>
      ) : data?.results ? (
        data.results.slice(0, 6).map((char) => (
          <CharactersCard key={char.id} char={char}/>
        ))
      ) : null}
    </div>
  )
}
