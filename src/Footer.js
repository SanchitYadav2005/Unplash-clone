import React from "react";
import './style.css'


function Footer() {
    return (
        <div className="footer">
            <h1 className="footer-heading">@Copyright</h1>
            <ul className="list">
                <li className="list-item">
                    <a className="item-links" href="https://unsplash.com/developers">
                        Developers/Api
                    </a>
                </li>
                <li className="list-item">
                    <a className="item-links" href="https://unsplash.com/data">
                        Unplash Dataset
                    </a>
                </li>
                <li className="list-item">
                    <a className="item-links" href="https://itunes.apple.com/us/app/unsplash/id1290631746?ls=1&mt=8&utm_source=unsplash&utm_medium=referral">
                        Unplash for iOS
                    </a>
                </li>
                <li className="list-item">
                    <a className="item-links" href="https://unsplash.com/apps">
                        Apps & Plugins
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;