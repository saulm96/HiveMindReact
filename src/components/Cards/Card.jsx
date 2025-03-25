import { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import "./card.css"

const LPCard = forwardRef ((props, ref) => {
    const location = useLocation()
    const locationName = location.pathname.replace(/^\//, "").replace(/\//g, '-');
    return(
        <div className={locationName === "" ? "LPCard" : `${locationName}--card`}>
            {props.children}
        </div>
    )
});

export default LPCard;