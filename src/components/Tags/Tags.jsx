import React, {useState} from "react";
import {tags} from "../../constant";
import {click} from "@testing-library/user-event/dist/click";

const Tags = () => {

    const [tag, setTag] = useState('New York');
    console.log(tag);
    const clickTag = () => {
        if (tag ==='New York'){
            setTag('London')
        }else{
            setTag('New York')
        }
        }

    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4 onClick={clickTag}>{tag}</h4>
            </div>
            <div className="w3-container w3-white">
                   <p/><span className="w3-tag w3-black w3-margin-bottom" style={{marginRight:"3px"}}>Travel</span>
                       {
                           tags.map((item)=>{
                               console.log(tags);
                               return <span className="w3-tag w3-light-grey w3-small w3-margin-bottom" style={{marginRight:"3px"}}>{item.tag}</span>

                    })
                }

            </div>
        </div>
    )
}

export default Tags;