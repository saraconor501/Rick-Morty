import { CharacterDetails } from "@/widgets/character-details/ui/character-details"
interface PageProps {
  params: { id: string }; // обычный объект, не промис
}

const CharacterDetailsById = ({params}: PageProps) => {
  return (
    <div>
      <CharacterDetails id={+params.id}/>
    </div>
  )
}

export default CharacterDetailsById