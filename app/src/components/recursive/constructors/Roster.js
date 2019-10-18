import React, { Component } from 'react';

import Rescursive from '../index'

import Utils from '../utils/Utils'


class RosterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={"Roster metadata" + this.props.count+ " metadata " + Utils.isUndefinedS(this.props.p.className)}>
                {
                    this.props.p !== undefined &&
                    this.props.p.md !== undefined &&
                    this.props.p.md.map((currentValue, index, arr) => {
                        currentValue.className = Utils.isUndefinedS(currentValue.className)+" metadata "
                        return Rescursive.render(currentValue, (index+this.props.count))
                    })
                }
            </div>
        );
    }
}

export default class Roster {
    build(mProps, mCount) {
        return (<RosterComponent key={"metadata" + mCount} p={mProps} count={mCount} />)
    }
};