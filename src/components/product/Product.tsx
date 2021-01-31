import React, { Component, Fragment, ReactNode } from "react";

class Product extends Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
    }

    // componentDidMount() {

    // }

    render(): ReactNode {
        return (
            <Fragment>
                <div>
                    <span>Имя</span>
                    <span></span>
                </div>
                <div>
                    <span>Цена</span>
                    <span></span>
                </div>
            </Fragment>

        )
    }
}

export default Product;