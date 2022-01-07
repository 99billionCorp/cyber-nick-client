import React from "react";
import CyberIzbushkaWhite from "./../../img/cyberIzbushkaWhite.png";
import "./style.scss";
import {Link} from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer">
            <Link to="/">
                <img src={CyberIzbushkaWhite} height="50px" alt="" />
            </Link>
            <ul className="footer__info footer__info_left">
                <li>
                    <Link to="/">
                        <b>Условия использования</b>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <b>О проекте </b>
                    </Link>
                </li>
            </ul>
            <div className="footer__info footer__info_right">
                <Link to="/">
                    <b>Вопросы и сотрудничество</b>
                </Link>
                <Link to="https://vk.com/al_feed.php ">
                    <p>Вконтакте</p>
                </Link>
                <Link to="/">
                    <p>WhatsApp</p>
                </Link>
                <Link to="/">
                    <p>Viber</p>
                </Link>
            </div>
        </div>
    );
}
