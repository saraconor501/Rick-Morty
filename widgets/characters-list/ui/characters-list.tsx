"use client"
import Image from 'next/image'
import { useGetCharacterQuery } from "@/features/fetchCharacters/fetchCharactersSlice"
import { useEffect, useState } from 'react'
import { Characters } from '@/features/fetchCharacters/fetchCharactersSlice'
const CharactersList = () => {

  const [page, setPage] = useState(1)
  const [allCharacters, setAllCharacters] = useState<Characters[]>([])

  const { data, isFetching } = useGetCharacterQuery({ page })

  useEffect(() => {
    if (data?.results) {
      setAllCharacters((prev) => [...prev, ...data.results])
    }
  }, [data])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <div className='max-w-[1440px] mx-auto my-[40px]'>
      <div className={` ${!isFetching ? 'grid grid-cols-8 gap-4 mx-auto' : ''}`}>
        {isFetching ? (
          <div className='text-[44px] text-white mx-auto w-[123px]'>loading...</div>
        ):(
        allCharacters.map((char) => (
          <div className='flex-auto' key={char.id}>
            <Image
              src={char.image}
              alt={char.name}
              width={100}
              height={100}
              className="rounded w-[164px] h-[164px]"
            />
            <h2 className='text-yellow-600'>{char.name}</h2>
          </div>
        )))}
      </div>
      {data?.info?.next && (
        <div className='text-center mt-6'>
          <button
            onClick={handleLoadMore}
            disabled={isFetching}
            className='px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'
          >
            {isFetching ? 'Загрузка...' : 'Показать ещё'}
          </button>
        </div>
      )}
    </div>
  )
}

export default CharactersList