import { request } from "../../httpReq"
import { CatBreed } from "../Models"

type GetCatsType = () => Promise<Array<CatBreed>> 

const getCats: GetCatsType = async () => {
    try {
        const data: Array<CatBreed> = await request('https://api.thecatapi.com/v1/breeds?limit=100','get')
        return data.map((item) => ({
            id: item.id,
            name: item.name,
            wikipedia_url: item.wikipedia_url,
            origin: item.origin,
            child_friendly: item.child_friendly,
            dog_friendly: item.dog_friendly,
            energy_level: item.energy_level ,
            image: item.image,
            isFavorite: false
        }))
    } catch (error) {
        throw error
    }
}
export default getCats