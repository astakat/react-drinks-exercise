import './DrinkItem.css'

export const DrinkItem = ({ drink }) => {
    return (
        <div className="drink-item">
            <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
            <h2>{drink.name}</h2>
        </div>
    )
}