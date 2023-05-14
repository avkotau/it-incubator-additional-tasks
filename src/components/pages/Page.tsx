import React from 'react';
import { PagesType } from "../../data/dataState";
import { useParams } from "react-router-dom";
import { Error404 } from "./Error404";
import Content from "./Contant";

type PagesPropsType = {
    pages: PagesType[]
}

const Page: React.FC<PagesPropsType> = ({pages}) => {
    const params = useParams();

    return (
        Number(params.id) <= pages.length
            ?
            <Content heading={pages[Number(params.id)].heading} about={pages[Number(params.id)].about}/>
            :
            <Error404/>
    )
};

export default Page;
