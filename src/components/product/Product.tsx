import React, { useState, useEffect, Fragment } from "react";
import { ILineGraphic } from "../../interfaces/graphics/ILineGraphic";
import { getProduct } from '../../rest/product/RestProduct';
import LineChartComponent from '../graphics/productHistoryPrice/ProductHistoryPriceGraphic';

function Product(): JSX.Element {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [graphicData, setGraphicData] = useState<ILineGraphic[]>([]);

    useEffect(() => {
        async function setProduct() {
            const productData = await getProduct('Сок Я апельсин с мякотью 970 мл');
            const { data } = productData || {};
            const { name = '', price = 0 } = data[0] || {};

            const graphicData = data.map<ILineGraphic>((product) => {
                const { date, price = 0 } = product;

                return {
                    name: date,
                    value: price
                }
            })
            setName(name);
            setPrice(price);
            setGraphicData(graphicData);
        }
        setProduct()
    })

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
            <div>
                {LineChartComponent(graphicData)}
            </div>
        </Fragment>
    );
}

export default Product;