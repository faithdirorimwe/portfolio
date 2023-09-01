import data from "../../database/db";
import { Link } from "react-router-dom";
const Card = () => {
    return (
        <>
            {data.card_con && data.card_con.map((item) => {
                return (
                    <div key={item.id} className="card-container">
                        {item.cards && item.cards.map(item => {
                            return (
                                <div key={item.id} className="card">
                                    <img src={item.image} alt="" />
                                    <div className="heading">
                                        <h1>{item.title}</h1>
                                        <p>{item.ptext}</p>
                                    </div>
                                    <div className="btn-con">
                                        <Link to={item.url} className="btn">{item.btn}</Link>
                                        <div></div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    );
}

export default Card;