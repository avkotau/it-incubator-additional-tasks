import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

type HeadingType = {
    heading: string
    about: string
}

const Content: React.FC<HeadingType> = ({heading, about}) => {

    const navigate = useNavigate();
    // console.log('navigate', navigate('/page/0'))

    const mainPageHandler = () => {
        navigate('/page/0')
    }

    const nextPageHandler = () => {
        navigate(-1)
    }


    return (
        <>
            <div>
                <div>{heading}</div>
                <div>{about}</div>
            </div>
            <button onClick={mainPageHandler}>Main page</button>
            <button onClick={nextPageHandler}>Next page</button>
        </>
    );
};

export default Content;
