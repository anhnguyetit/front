import React, { useState } from 'react';
import addProductApi from '../../api/addProductApi';

const AddProduct = () => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [priceUnit, setPriceUnit] = useState(0)
    const [img, setImg] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        if (name === '' || quantity <= 0 || priceUnit <= 0 || img === '') {
            alert('Lost info')
            return;
        }

        addProductApi
            .postProduct({ name, quantity, priceUnit, img })
            .then((res) => console.log(res.some))
            .catch((err) => console.log(err.data));

        setName('')
        setPriceUnit(0)
        setImg('')
        setQuantity(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
            <input type="text" value={priceUnit} onChange={e => setPriceUnit(parseInt(e.target.value))} />
            <input type="text" value={img} onChange={e => setImg(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddProduct;