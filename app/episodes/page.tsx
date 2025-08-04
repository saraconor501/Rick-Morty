'use client'
import { useGetEpisodesQuery } from "@/features/fetch-episodes/fetchEposodesSlice"
interface Episodes {
  id: number,
  name: string,
}
const Episodes = () => {
//надо потом изменить эту страницу 
//тут надо сделать компаненту episodes-list
//и  надо сделать карточку для этой страници
  const {data} = useGetEpisodesQuery({page: 1})
  return (
    <div className="w-[500px] mx-auto ">
      {data?.results?.map((item : Episodes) => (
        <ul key={item.id}>
          <li className="text-white">{item.name}</li>
        </ul>
      ))}
    </div>
  )
}

export default Episodes