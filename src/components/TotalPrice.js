import React, {Component} from 'react'


class TotalPrice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totPrice: 0
        }
    }

    componentDidMount() {
        const { price } = this.props
        const total = price.map( (i, index) => {
            return i.price
        } )

        const add = (a, b) => a + b

        this.setState({ totPrice: total.reduce(add) })

    }

    render() {
        return <b className="price">{ this.state.totPrice }$</b>
    }



}

export default TotalPrice