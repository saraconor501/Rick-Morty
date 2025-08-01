'use client'
import Link from "next/link"
import { Footerlist } from "../model/titles"
import { useGetCharacterQuery } from "@/features/fetchCharacters/fetchCharactersSlice"

export const Footer = () => {
  const {data} = useGetCharacterQuery({page: 1})
  const updatedFooterList = Footerlist.map((item) => {
    if (item.name === 'characters:' && data?.info?.count) {
      return { ...item, value: data.info.count }
    }
    // Тут позже можно добавить другие условия:
    // if (item.name === 'episodes:' && episodesData?.info?.count) {...}
    return item
  })
  return (
    <div className='relative bottom-0 w-full bg-[#202329] flex items-center justify-center h-[193px] flex-col'>
      <div className="flex gap-7">
        {updatedFooterList.map((item) => (
          <Link href={item.path} key={item.id}>
            <span className="text-[#9E9E9E] text-[17px] font-bold">{item.name}{item.value}</span>
          </Link>
        ))}
      </div>
      <div className=" flex items-center justify-center gap-2 h-[30px]">
        <span className="text-[#9E9E9E] h-[30px] text-[17px] font-bold">server status</span>
        <span className="bg-[#55CC44] w-[9px] h-[9px] rounded-[50%] inline-block align-middle"></span>
      </div>
    </div>
  )
}

