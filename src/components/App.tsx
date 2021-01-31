import React, { Component, Fragment, ReactNode } from "react";
import Footer from './footer/Footer';
import Product from './product/Product'

class App extends Component {
    constructor(props: never) {
        super(props);


    }

    render(): ReactNode {
        return (
            <Fragment>
                {/* <Footer /> */}
                <Product />
            </Fragment>
        )
    }
}

export default App;