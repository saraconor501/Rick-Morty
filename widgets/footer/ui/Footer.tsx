import Link from "next/link"

type ListItem = {
  id: number,
  name: string,
  value: number,
  path: string,
}

const list: ListItem[] = [
  {
    id: 1,
    name: 'characters',
    value: 826,
    path: '/characters'
  },
  {
    id: 2,
    name: 'locations',
    value: 126,
    path:'/locations',
  },
  {
    id: 3,
    name: 'episodes',
    value: 51,
    path: '/'
  },
]

export const Footer = () => {
  return (
    <div className='relative bottom-0 w-full bg-[#202329] flex items-center justify-center h-[193px] flex-col'>
      <div className="flex gap-7">
        {list.map((item) => (
          <Link href={item.path} key={item.id}>
            <span className="text-[#9E9E9E] text-[17px] font-bold">{item.name}:{item.value}</span>
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

