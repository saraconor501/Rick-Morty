type ListItem = {
  id: number,
  name: string,
  value: number | string,
  path: string,
}

export const Footerlist: ListItem[] = [
  {
    id: 1,
    name: 'characters:',
    value: '1',
    path: '/characters'
  },
  {
    id: 2,
    name: 'locations:',
    value: 123,
    path:'/',
  },
  {
    id: 3,
    name: 'episodes:',
    value: 51,
    path: '/'
  },
  {
    id: 4,
    name: 'Home',
    value: '',
    path: '/'
  },
]
