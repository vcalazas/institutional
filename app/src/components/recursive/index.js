import React from 'react';

import Roster from './constructors/Roster'
import Knob from './constructors/Knob'
import TextBox from './constructors/TextBox'

const constructors = [
    Roster,
    Knob,
    TextBox
]

export default {
    render: (function (mMetadata, mCount) {
        let newCount = 0
        if (mCount === undefined)
            newCount = 0
        else
            newCount = mCount + 1
        if (mMetadata !== undefined)
            for (let i = 0; i < constructors.length; i++)
                if (mMetadata.t === constructors[i].name)
                    try {
                        return (new constructors[i]().build(mMetadata, newCount))
                    } catch (error) {
                        return (<div className={mMetadata.t + " metadata-error"}> {JSON.stringify(error)} </div>)
                    }
    })
}