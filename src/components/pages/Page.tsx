import React from 'react';
import { PagesType } from "../../data/dataState";
import { useParams } from "react-router-dom";
import { Error404 } from "./Error404";

type PagesPropsType = {
    pages: PagesType[]
}

const Page: React.FC<PagesPropsType> = ({pages}) => {
    const params = useParams();
    const pagesNum = pages[Number(params.id)];

    return (
        <>
            {params.id && params.id?.length < pages.length || typeof pagesNum === 'number'
                ? <div>
                    <div>{pagesNum.heading}</div>
                    <div>{pagesNum.about}</div>
                </div>
                :
                <Error404/>
            }
        </>
    )

};

export default Page;
