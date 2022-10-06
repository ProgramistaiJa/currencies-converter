import React, { useEffect } from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Select } from "../../Select/select";
import History from "../History/History";

export type Inputs = {
    result: number,
    amount: number,
};

const initialExchange : Inputs = {
    result: 0,
    amount: 0
}

const selectOptions = [
    "PLN",
    "USD",
    "Mercedes",
    "Audi"
]

export default function Form() {
    const [exchange, setExchange] = useState<Inputs | null>(null)
    const [exchanges, setExchanges] = useState<Inputs[] | null>(null);
    const [showHistory, setShowHistory] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        setExchange(data)
    }

    // console.log(watch("result")) // watch input value by passing the name of it

    useEffect(() => {
        if(exchange === null){
            const items = localStorage.getItem('items');
            const _exchanges = items ? JSON.parse(items) : null

            if (_exchanges) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                _exchanges ? setExchanges(_exchanges): null;
            }

        } else {
        const _exchanges: Inputs[] | null = exchanges && exchange? [exchange, ...exchanges] : exchange?[exchange]: exchanges? [...exchanges]: null
        setExchanges(_exchanges)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        _exchanges !== null ? localStorage.setItem('items', JSON.stringify(_exchanges)) : null;

        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
     [exchange])

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <Select label="Przelicz z" selectName="currencyFrom" options={selectOptions}/>
                <Select label="Przelicz na" selectName="currencyTo" options={selectOptions}/>

                <Input
                    label="Kwota"
                    inputName="amount"
                    placeholder="Wpisz kwotę"
                    error={errors.amount}
                    register={register}
                    required={true}
                />
                <Input
                    label="Wynik" 
                    inputName="result" 
                    error={errors.result} 
                    register={register} 
                    required={false}/>
            </FormRow>
            <FormRow>
                <Button type="button" onClick={() =>setShowHistory(!showHistory)} primary={false} isDisabled={false} label="Historia"/>
                <Button type="submit" primary={true} isDisabled={false} label="Konwertuj"/>
            </FormRow>
        </form>
        {showHistory && <History exchanges={exchanges}/>}
    </>
    
  );
}

const FormRow = styled.div`
    display: flex;
`