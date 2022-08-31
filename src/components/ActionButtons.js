import React from "react"
import BlueContainer from "./BlueButton"
import GreenContainer from "./GreenButton"
import RedContainer from "./RedButton"

const ActionButtons = ({ onColorChange }) => {
    return (
        <div>
            <RedContainer aRandomEventHandlerName={() => onColorChange('red')} />
            <BlueContainer onClick={() => onColorChange('blue')} />
            <GreenContainer onClick={() => onColorChange('green')} />
        </div>
    )
}

export default ActionButtons