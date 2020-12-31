import { MDBDataTableV5 } from 'mdbreact';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import deleteProduct from '../../api/deleteProductApi';
import "./products.css";

const Product = (props) => {

    const [datatable, setDatatable] = useState({
        columns: [
            {
              label: 'Name',
              field: 'name',
              width: 50,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
              },
            },
            {
              label: 'Quantity',
              field: 'quantity',
              width: 50,
            },
            {
              label: 'Price Unit',
              field: 'priceUnit',
              width: 50,
            },
            {
              label: 'Image',
              field: 'img',
              width: 300,
              sort: 'disabled',
            },
            {
              label: 'Action',
              field: 'action',
              width: 100,
              sort: 'disabled',
            }
          ],
          rows: []
    })

    const { list, isShow } = props

    const handleUpdateProduct = id => {
      isShow(id)
    }

    const handleDeleteProduct = id => {
      deleteProduct.deleteProduct(id)
      .then((res) => console.log(res.some))
      .catch((err) => console.log(err.data));
    }

    useEffect(() => {
        let newData = list.map(product => {
            
            product.action = <div>
            <img height="15px" width="15px"
            onClick={() => handleUpdateProduct({id: product._id, name: product.name, quantity: product.quantity, unitPrice: product.priceUnit, img: product.img})}
            src="https://www.flaticon.com/svg/static/icons/svg/1159/1159633.svg" alt="icon"/>
            <img onClick={() => handleDeleteProduct(product.name)}
            height="15px" width="15px"
            src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" alt="icon" /></div>
            product.img = <img src={product.img} alt="icon" className="product__img"></img>
            return product
        })

        setDatatable({ ...datatable, rows: newData })
    }, [list])

    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
}

Product.propTypes = {
    list: PropTypes.array,
    isShow: PropTypes.func
}

Product.defaultProps = {
    list: [],
    isShow: null
}
 
export default Product;