import Image from 'next/image';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export default async function Home() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data: CharactersResponse = await res.json();

  return (
    <div className=" max-w-[1440px] my-[50px] mx-auto grid grid-cols-3 gap-[20px]">
      {data.results.slice(0,6).map((char) => (
        <div key={char.id} className="max-w-[600px] flex gap-[12px] h-auto bg-[#3C3E44] rounded-lg p-4">
          <Image
            src={char.image}
            alt={char.name}
            width={229}
            height={220}
            className="rounded w-[164px] h-[164px]"
          />
          <h2 className="text-white pt-0 text-[27px] font-bold ">{char.name}</h2>
        </div>
      ))}
    </div>
  );
}
