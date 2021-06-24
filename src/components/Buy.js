import { useState } from "react";



const Buy = (props) => {
    const price = props.price
    const [changePrice, setChangePrice] = useState(0)
    const [priceError, setPriceError] = useState(true)
    const [priceText, setPriceText] = useState('')

    const changeMoney = (event) => {
        if (price > event.target.value) {
            setPriceError(true)
            setChangePrice(0)
        } else {
            setPriceError(false)
            setChangePrice(event.target.value - price)
        }
    }
    
    const clickMoney = () => {
        if (priceError) {
            setPriceText('お支払い金額が足りていません。')
        } else {
            const changePrices = changePrice.toLocaleString()
            setPriceText(`お釣り：${changePrices}円`)
        } 
    }

    const locale = () => {
        const prices = price
        const localePrice = prices.toLocaleString()
        return localePrice
    }

    const preview = () => {
        if (price === 0) {
            return true
        } 
    }
    
    return (
        <div className="item-modal">
            <h1>カート</h1>
            <p>商品合計：{locale()}円</p>
            <label>支払額：
            <input onChange={(event) => changeMoney(event)} type="number" />円
            </label>
            <p>{priceText}</p>
            <div className="item-btns">
                <button onClick={clickMoney} disabled={preview()}>会計</button>
                <button onClick={() => props.setModalOpen(false)}>戻る</button>
            </div>
        </div>
    )
}

export default Buy;