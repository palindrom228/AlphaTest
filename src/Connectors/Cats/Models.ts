export interface CatBreed {
  id: string,
  name: string,
  wikipedia_url: string,
  origin: string,
  child_friendly: number,
  dog_friendly: number,
  energy_level: number ,
  image: {
    height: number,
    id: string,
    url: string,
    width: number
  },
  isFavorite: boolean 
} 