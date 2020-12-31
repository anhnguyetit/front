import React, { useEffect, useState } from 'react';
import updateProduct from '../../api/updateProductApi';
import PropTypes from 'prop-types';

const UpdateProduct = props => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [priceUnit, setPriceUnit] = useState(0)
    const [img, setImg] = useState('')

    const { id, isShow } = props

    useEffect(() => {
        setName(id.name)
        setQuantity(id.quantity)
        setPriceUnit(id.unitPrice)
        setImg(id.img.props.src)

        return () => {
            setName('')
            setQuantity(0)
            setPriceUnit(0)
            setImg('')
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if (name === '' || quantity <= 0 || priceUnit <= 0 || img === '') {
            alert('Lost info')
            return;
        }

        isShow()

        updateProduct.updateProduct({ id: id.id, name, quantity, priceUnit, img }).then(res => console.log(res.some)).catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
            <input type="text" value={priceUnit} onChange={e => setPriceUnit(parseInt(e.target.value))} />
            <input type="text" value={img} onChange={e => setImg(e.target.value)} />
            <button type="submit">Edit</button>
        </form>
    );
}

UpdateProduct.propTypes = {
    id: PropTypes.object,
    isSholistw: PropTypes.func
}

UpdateProduct.defaultProps = {
    id: {},
    isShow: null
}

export default UpdateProduct