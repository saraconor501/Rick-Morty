"use client"
import { useGetCharacterQuery } from "@/features/fetchCharacters/fetchCharactersSlice"
import { useEffect, useState } from 'react'
import { Characters } from '@/features/fetchCharacters/fetchCharactersSlice'
import { CharactersCard } from '@/entities/characters-card'
import { HeroSlide } from "@/widgets/hero-slide"
const CharactersList = () => {

  const [page, setPage] = useState(1)
  const [allCharacters, setAllCharacters] = useState<Characters[]>([])

  const { data, isFetching, isError } = useGetCharacterQuery({ page })

  useEffect(() => {
    if (data?.results) {
      setAllCharacters((prev) => {
        const all = [...prev, ...data.results]
        const unique = all.filter(
          (item, index, self) => index === self.findIndex((t) => t.id === item.id)
        )
        return unique
      })
    }
  }, [data])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <>
    <HeroSlide>
      The Rick and Morty Characters
    </HeroSlide>
      <div className='max-w-[1440px] mx-auto my-[40px]'>
        <div className={` py-[81px] max-w-[1440px] mx-auto ${!isFetching || !isError ? 'grid grid-cols-3 gap-[20px]' : ''}`}>
          {
            allCharacters.map((char) => (
              <CharactersCard key={char.id} char={char} />
            ))}
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
    </>
  )
}

export default CharactersList