import { CharacterDetails } from "@/widgets/character-details/ui/character-details"

const CharacterDetailsById = ({params} : {params: {id: string}}) => {
  return (
    <div>
      <CharacterDetails id={+params.id}/>
    </div>
  )
}

export default CharacterDetailsById