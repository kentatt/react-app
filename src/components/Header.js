import { useState } from 'react';
import Modal from "react-modal";
import Buy from './Buy'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

Modal.setAppElement("#root");

const Header = (props) => {
    const [modalOpen, setModalOpen] = useState(false)

    const locale = () => {
        const price = props.userTotalPrice
        const localePrice = price.toLocaleString()
        return localePrice
    }

    return (
        <>
            <Box display="flex" justifyContent="flex-end">
                <Box mr={4}><h2>{props.userName}さん</h2></Box>
                <h2>合計金額：{locale()}円</h2>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => setModalOpen(true)}
                >
                    カートへ
                </Button>
            </Box>
            <Modal className="items-modal" isOpen={modalOpen}>
                <Buy 
                    price={props.userTotalPrice}
                    setModalOpen={setModalOpen}
                />
            </Modal>
        </>
    )
}

export default Header;