import React from 'react'
import { CatBreed } from "../../../Connectors/Cats/Models"

interface Props extends CatBreed {
    onPressFavorites: () => void
    onPressDelete: () => void
}

const CatCard: React.FC<Props> = (props) => {
    return (
        <div className={'CatCard'}>
            <div className={'CatCardInfo'}>
            </div>
        </div>
    )
}

const areEqual = (prevProps: Props, nextProps: Props) => prevProps.isFavorite === nextProps.isFavorite
export default React.memo(CatCard, areEqual)