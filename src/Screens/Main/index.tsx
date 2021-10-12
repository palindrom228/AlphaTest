import React from "react"
import SwitchSelector from "react-switch-selector"
import CatCard from "../../Core/Moleculas/CatCard"
import usePresenter from "./presenter"

const Main: React.FC = () => { 
    const viewModel = usePresenter()
    return (
        <>
        <div className={'Switch'}>
        <SwitchSelector
            options={viewModel.options}
            selectedBackgroundColor={'#34baeb'}
            onChange={(value: any) => viewModel.handleChangeIsFavorites(value)}
        />
        </div>
        <div className={'Main'}>
            {viewModel.isFavorites ? 
                viewModel.favorites.map((item) => <CatCard key={item.id} {...item} onPressDelete={() =>{}} onPressFavorites={()=>{}}/>)
                :
                viewModel.data.map((item) => <CatCard key={item.id} {...item} onPressDelete={() =>{}} onPressFavorites={()=>{}}/>)
            }
        </div>
        </>
    )
}

export default Main