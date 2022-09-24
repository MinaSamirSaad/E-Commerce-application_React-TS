import React from 'react'
import "./homepage.styles.scss"
import Directory from '../../components/directory/directory.component'
export const HomePage = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            <Directory/>
        </div>
    )
}
