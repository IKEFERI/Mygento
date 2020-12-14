import React from "react";
import {contacts, item, h2} from "./Footer.module.sass"

const Footer = () => {
    return <footer className={contacts}>
        <h2 className={h2}>My Contacts</h2>
        <div className={item}>
            Tel: <a href="tel:79128411225">+7 (912) 841-12-25</a>
        </div>
        <div className={item}>
            Mail: <a href="mailto:remkefer@gmail.com">remkefer@gmail.com</a>
        </div>
        <div className={item}>
            Social: <a href="https://vk.com/1nks1">VK</a> <a href="https://www.linkedin.com/in/ikeferi/">LinkedIn</a> <a href="https://github.com/IKEFERI">Github</a>
        </div>
    </footer>
}
export default Footer;

