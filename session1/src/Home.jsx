import React from 'react';

export default class Home extends React.Component {

    handleClick() {
        alert('Clicked!');
    }

    render() {
        const fullname = this.props.fullname;
        // let result = `Xin chào! Tên tôi là ${fullname}`;
        return (
            <div>
                <h1>Welcomae {fullname}</h1>
                <h1 className="txt-red">Home Pages {this.props.name}</h1>
                <button onClick={this.handleClick}>Click me!</button>
                <input type="text" defaultValue={'Giá trị mặc định'} />
                <input type="checkbox" defaultChecked={false} />
            </div>
        )
    }
}
