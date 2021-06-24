import Items from './Items';
import { useState } from 'react';
import Box from '@material-ui/core/Box';


const List = (props) => {
    const [totalPrice, setTotalPrice] = useState(0)

    const goodsList = [
        {
            id: 1,
            name: 'ぬいぐるみ',
            image: `${process.env.PUBLIC_URL}/dool.jpeg`,
            price: 1200
        },
        {
            id: 2,
            name: '肉',
            image: `${process.env.PUBLIC_URL}/meet.jpg`,
            price: 2300
        },
        {
            id: 3,
            name: '空気清浄機',
            image: `${process.env.PUBLIC_URL}/clean.jpeg`,
            price: 54000
        }
    ]

    return (
        <>
            <h1>商品一覧</h1>
            <Box display="flex" justifyContent="center" >
                { goodsList.map((goodsItem, index) => {
                    return (
                        <Box mx={4}>
                            <Items 
                                name={goodsItem.name}
                                image={goodsItem.image}
                                price={goodsItem.price}
                                setTotalPrice={setTotalPrice}
                                key={index}
                            />
                        </Box>
                    )
                }) }
            </Box>
            {props.setUserTotalPrice(totalPrice)}
        </>
    )

}

export default List;



