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
    }),
    cleanObject: (function (mObject) {
        try {
            let blackList = ["className", "string", "number"]
            let obj = JSON.parse(JSON.stringify(mObject))
            let proccess = ((mObj) => {
                for (let x in mObj) {
                    if (mObj[x] === null || mObj[x] === undefined || mObj[x] === "" || blackList.includes(x) === true) {
                        delete mObj[x]
                    } else if (blackList.includes(typeof mObj[x]) === false && mObj[x].length !== undefined) {
                        if (mObj[x].length > 0) {
                            for (let i = 0; i < mObj[x].length; i++) {
                                mObj[x][i] = proccess(mObj[x][i])
                            }
                        } else {
                            delete mObj[x]
                        }
                    }
                }
                return mObj
            })
            let asd = proccess(obj)
            return asd
        } catch (error) {
            return mObject
        }
    })
}