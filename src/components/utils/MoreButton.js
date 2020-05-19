import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function MoreButton(props) {
    return(
        <div className="more-button">
            <Link to={`/subjects/${props.subject.id}`}>
                <Button>Подробнее</Button>
            </Link>
        </div>
    );
}

