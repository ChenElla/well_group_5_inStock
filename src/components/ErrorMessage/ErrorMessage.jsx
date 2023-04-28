import React from 'react'
import './ErrorMessage.scss';
export default function ErrorMessage() {
    return (
        <div className = "container">
            <div className = "container__errorColumn">
                404 Not Found: Please check whether you have an appropriate website url!
            </div>
        </div>
    )
}
