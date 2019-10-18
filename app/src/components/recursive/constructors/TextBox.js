import React, { Component } from 'react';
import Utils from '../utils/Utils'

class TextBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={"TextBox metadata" + this.props.count + " " + Utils.isUndefinedS(this.props.p.className)}>
                <input type="text" onChange={(mEvent)=>{
                    this.props.p.v = mEvent.target.value
                }}/>
            </div>
        );
    }
}

export default class TextBox {
    build(mProps, mCount) {
        return (<TextBoxComponent key={"metadata" + mCount} p={mProps} count={mCount} />)
    }
};