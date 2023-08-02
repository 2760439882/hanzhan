import React from "react"
import './footer.css'

const FooterTop: React.FC = () =>{
    interface Person {
        id: number;
        game: string;
        team: string;
        join: string;
        qun: string;
    }

    const list: Person[] = [
        {
            id: 1,
            game: '捍战',
            team: '战队',
            join: '咨询加入',
            qun: '赛事官方群'
        },
        {
            id: 2,
            game: '捍战',
            team: '战队',
            join: '咨询加入',
            qun: '赛事官方群'
        },
        {
            id: 3,
            game: '捍战',
            team: '战队',
            join: '咨询加入',
            qun: '赛事官方群'
        }
    ]

    const renderedItems = list.map((item) => (
        <div className="footer-item" key={item.id}>
            <h4>{item.game}</h4>
            <ul>
                <li>{item.team}</li>
                <li>{item.join}</li>
                <li>{item.qun}</li>
            </ul>
        </div>
    ));


    return (
        <div>
            <div className="footer-box">
                {renderedItems}
            </div>
        </div>
    );
}

const FooterBottom: React.FC = () =>{
    const data ={
        copy: '@copy',
        author: '逍遥&&萧熙&&捍战赛事组',
        time: '2020-2023'
    }
    return (
        <div className="copy">
            <p>
                <span>{data.copy}</span>
                <span>{data.author}</span>
                <span>{data.time}</span>
            </p>
        </div>
    )
}

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container">
                        <FooterTop></FooterTop>
                    </div>
                    <div className="copy-box">
                        <div className="container">
                            <FooterBottom></FooterBottom>
                        </div>
                    </div>
                </footer>

            </>

        )
    }
}

export default Footer