'use client'
import { useGetCharacterQuery } from '@/features/fetchCharacters/fetchCharactersSlice'
import Image from 'next/image'
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
          <div className='flex bg-[#3C3E44] max-h-215px' key={char.id}>
            <Image
              src={char.image}
              alt={char.name}
              width={100}
              height={100}
              className='w-[220px] h-[215px]'
            />
            <div className='p-3.5 w-full overflow-auto h-[215px]'>
              <h3 className=' text-[27px] font-bold text-[#F5F5F5]'>{char.name}</h3>
              <h2 className=' text-white text-[14px] font-medium'>
                <span className={`w-[9px] mr-1 inline-block rounded-full h-[9px] 
                ${char.status === 'Alive' ? 'bg-[#55CC44]' : 
                char.status === 'Dead' ? 'bg-red-700' : 
                char.status === 'Unknown' ? 'bg-green-200' : 'bg-gray-500'}`}
                ></span> 
                {char.status}-{char.gender}
                </h2>
                <h2 className='text-[15px] font-medium text-[#9E9E9E]'>Last known location:</h2>
                <h2 className='text-[18px] text-white'>{char.location.name}</h2>
                <h2 className='text-[16px] text-[#9E9E9E] font-medium'>First seen in:</h2>
                <h2 className='text-[17px] text-white'>{char.origin.name}</h2>
            </div>
          </div>
        ))
      ) : null}
    </div>
  )
}
