import { useState } from "react";

function Card({id,name,image,info,price,removeTour}){
    const [readmore,setReadmore]=useState(false);
    const description=readmore?info:`${info.substring(0,200)}...`;
    

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="card">
            <img className="image" src={image}></img>
            <div className="tourInfo">
                <h4 className="tourPrice">₹ {price}</h4>
                <h4 className="tourName">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="readmore" onClick={readmoreHandler}>
                    {readmore ? `show less` : `show more`}
                </span>
            </div>
            <button className="btnRed" onClick={()=>removeTour(id)}>
                Not Interested
            </button>

        </div>
    )
}
export default Card;