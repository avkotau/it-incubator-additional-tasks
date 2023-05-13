import React from 'react';
import { City } from "./City";
import { BanknotsType, MoneyType } from "./App";
import {Button, TomatoButton, BlueButton} from "./Styles";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (banknots: BanknotsType) => void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
}

export const Country = (props: CountryPropsType) => {
    const {data, setFilterValue} = props
    const setAll = () => {
        // засетаем 'All'
        setFilterValue("All")
    }

    const setDollars = () => {
        // засетаем 'Dollars'
        setFilterValue("Dollars")
    }

    const setRUBLS = () => {
        // засетаем 'RUBLS'
        setFilterValue("RUBLS")
    }


    return (
        <div>

            <Button  onClick={setAll}>All</Button>
            <TomatoButton onClick={setDollars}>Dollars</TomatoButton>
            <BlueButton onClick={setRUBLS}>RUBLS</BlueButton>
            <City data={data}/>
        </div>
    );
};

