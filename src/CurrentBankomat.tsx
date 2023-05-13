import React from 'react';
import { MoneyType } from "./App";


type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <div>
            <div>{props.money.banknotes}</div>
            <div>{props.money.value}</div>
        </div>

    )
};
