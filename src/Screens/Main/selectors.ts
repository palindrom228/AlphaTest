import { RootState } from "../../Store";


export const favoritesSelector = (state: RootState) => {
    return state.cats.data.filter((item) => item.isFavorite)
}
