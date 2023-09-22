import React from "react"
import { Link } from 'react-router-dom';

import './header.css'

const Logo: React.FC = () => {
    return (
        <div className="logo-area">
            {/* <Link to={"/"}>
            <img src="src\assets\img\HZ.png" alt="" />
        </Link> */}

            <a href="/">
                <img src="src\assets\img\HZ.png" alt="" />
            </a>
        </div>
    );
};
const Nav: React.FC = () => {
    interface Person {
        id: number;
        name: string;
        to: string;
    }

    let Props: Person[] = [
        {
            id: 1,
            name: '首页',
            to: '/hanzhan/'
        },
        {
            id: 2,
            name: '赛事',
            to: '/hanzhan/event'
        },
        {
            id: 3,
            name: '战队',
            to: '/hanzhan/teams'
        },
        {
            id: 4,
            name: '关于我们',
            to: '/hanzhan/about'
        },
        {
            id: 5,
            name: '工作人员',
            to: '/hanzhan/personnel'
        },
        {
            id: 6,
            name: '诚邀令',
            to: '/hanzhan/join'
        }
    ]

    const ListItems = Props.map((item) => (
        <li key={item.id}>
            <Link to={item.to}>{item.name}</Link>
        </li>
    ));

    return (
        <div className="menu-area">
            <ul>
                {ListItems}
            </ul>
        </div>
    );
};




class Header extends React.Component {
    // items = ['首页', '赛事', '战队','关于我们' , '工作人员', '诚邀令'];
    render() {

        return (
            <>
                <header>
                    <div className="container">
                        <div className="menu">
                            <Logo></Logo>
                            <Nav></Nav>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header