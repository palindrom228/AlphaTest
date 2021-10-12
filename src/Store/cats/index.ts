import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import store, { RootState } from "..";
import getCats from "../../Connectors/Cats/getCats";
import { CatBreed } from "../../Connectors/Cats/Models";

export const fetchCats = createAsyncThunk<void, void, {state: RootState}>(
    'cats/fetch',
    async (_,{dispatch, getState}) => {
        try {
            const data = await getCats()
            dispatch(catsSlice.actions.loadCats(data))
        } catch (error) {
            throw error
        }
    }
)

interface CatsData {
    loading: boolean,
    status: string,
    data: Array<CatBreed>
}

const catsAdapter = createEntityAdapter<CatsData>()

const catsSlice = createSlice({
    name: 'cats',
    initialState: catsAdapter.getInitialState({
        data: [] as CatBreed[],
        loading: false,
        status: "default"
    }),
    reducers: {
        loadCats: (state, action: PayloadAction<CatBreed[]> ) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCats.pending, (state,action) => {
            state.loading = true
            state.status = 'loading'
        })
        builder.addCase(fetchCats.fulfilled, (state,action) => {
            state.loading = false
            state.status = 'loaded'
        })
        builder.addCase(fetchCats.rejected, (state,action) => {
            state.loading = false
            state.status = 'error'
        })
    }
})
export default catsSlice.reducer