import React, {useState} from 'react';
import Modal from "react-modal";

import Box from '@material-ui/core/Box';

Modal.setAppElement("#root");

const Items = (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [count, setCount] = useState(0)
    
    const locale = () => {
        const price = props.price
        const localePrice = price.toLocaleString()
        return localePrice
    }

    const countUp = () => {
        setCount(prevState => prevState + 1)
    }

    const countDown = () => {
        setCount(prevState => prevState - 1)
    }

    const clickTotalPrice = () => {
        const numberItems = props.price * count
        props.setTotalPrice(prevState => prevState + numberItems)
        setModalOpen(false)
    }

    const preview = () => {
        if (count >= 1) {
            return true
        } 
    }

    return (
        <>
            <div onClick={() => setModalOpen(true)}>
                <img src={props.image} alt="description" width="300" height="200" />
                <h2>{props.name}</h2>
                <p>金額：{locale()}円</p>
            </div>
            <Modal className="items-modal" isOpen={modalOpen} >
                <div className="item-modal">
                    <img src={props.image} alt="description" />
                    <div>
                        <h2>{props.name}</h2>
                        <p>金額：{locale()}円</p>     
                        <Box display="flex">                
                            <Box flexGrow={1}>個数：{count}</Box>
                            <button className="item-btn-puls" onClick={countUp}>プラス</button>
                            <button onClick={countDown} disabled={!preview()}>マイナス</button>
                        </Box>
                    </div>
                    <div className="item-btns">
                        <button onClick={clickTotalPrice} disabled={!preview()}>カートに入れる</button>
                        <button onClick={() => setModalOpen(false)}>キャンセル</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Items;
