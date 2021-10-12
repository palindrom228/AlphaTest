import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CatBreed } from "../../Connectors/Cats/Models"
import { RootState } from "../../Store"
import { fetchCats } from "../../Store/cats"
import { favoritesSelector } from "./selectors"

interface ViewModel {
    data: CatBreed[],
    favorites: CatBreed[],
    isFavorites: boolean,
    options: FavoritesSwitch[],
    handleChangeIsFavorites: CallBackType
}
interface FavoritesSwitch {
    label: string,
    value: string
}
type PresenterType = () => ViewModel

const options: FavoritesSwitch[] = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Favorites",
        value: "favorites"
    }
]

type CallBackType = (value: string) => void
const usePresenter: PresenterType = () => {
    const dispatch = useDispatch()
    const [isFavorites, setIsFavorites] = useState<boolean>(false)
    const store = useSelector((state: RootState) => ({
        data: state.cats.data,
        favorites: favoritesSelector(state)
    }))
    const handleChangeIsFavorites = useCallback<CallBackType>((value)=>{
        setIsFavorites(value === "favorites")
    },[isFavorites])
    useEffect(() => {
        dispatch(fetchCats())
    }, [])
    return {
        data: store.data,
        favorites: store.favorites,
        isFavorites,
        options: options,
        handleChangeIsFavorites
    }
}
export default usePresenter