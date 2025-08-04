import Image from "next/image"
import { Characters } from "@/features/fetchCharacters/fetchCharactersSlice"
import Link from "next/link"
export const CharactersCard = ({char}: {char: Characters}) => {
  return (
          <Link href={`/characters/${char.id}`} className='flex bg-[#3C3E44] max-h-215px'>
            <Image
              src={char.image}
              alt={char.name}
              width={100}
              height={100}
              className='w-[220px] h-[215px]'
            />
            <div className='p-3.5 w-full flex flex-col gap-1.5 h-[215px]'>
              <h3 className=' text-[24px] font-bold text-[#F5F5F5]'>{char.name}</h3>
              <h2 className=' text-white text-[11px] font-medium'>
                <span className={`w-[9px] mr-1 inline-block rounded-full h-[9px] 
                ${char.status === 'Alive' ? 'bg-[#55CC44]' : 
                char.status === 'Dead' ? 'bg-red-700' : 
                char.status === 'Unknown' ? 'bg-green-200' : 'bg-gray-500'}`}
                ></span> 
                {char.status}-{char.gender}
                </h2>
                <h2 className='text-[12px] font-medium text-[#9E9E9E]'>Last known location:</h2>
                <h2 className='text-[15px] text-white'>{char.location.name}</h2>
                <h2 className='text-[13px] text-[#9E9E9E] font-medium'>First seen in:</h2>
                <h2 className='text-[14px] text-white'>{char.origin.name}</h2>
            </div>
          </Link>
  )
}
