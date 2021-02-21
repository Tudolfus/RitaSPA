import React, { Component, Fragment } from "react";
import { getProduct } from '../../rest/product/RestProduct';

class Product extends Component<unknown, any> {
    constructor(props: unknown) {
        super(props);

        this.state = {
            name: 'no',
            price: 29
        }
    }

    async componentDidMount() {
        const product = await getProduct('Сок Я апельсин с мякотью 970 мл');
        console.log(product);
        this.setState({ name: product.data[0].name, price: product.data[0].price });
    }

    render() {
        const { name, price } = this.state;

        return (
            <Fragment>
                <div>
                    <span>Имя</span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>Цена</span>
                    <span>{price}</span>
                </div>
            </Fragment>

        )
    }
}

export default Product;