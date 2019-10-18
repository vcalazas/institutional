import React, { Component } from 'react';
import Utils from '../utils/Utils'

class KnobComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div className={"Knob metadata" + this.props.count + " " + Utils.isUndefinedS(this.props.p.className)}>

            </div>
        );
    }
}

export default class Knob {
    build(mProps, mCount) {
        return (<KnobComponent key={"metadata" + mCount} p={mProps} count={mCount} />)
    }
};