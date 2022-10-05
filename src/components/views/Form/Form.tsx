import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Select } from "../../Select/select";

export type Inputs = {
    result: number,
    amount: number,
};


const selectOptions = [
    "PLN",
    "USD",
    "Mercedes",
    "Audi"
]

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("result")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
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
            <Button type="submit" primary={false} isDisabled={false} label="Historia"/>
            <Button type="submit" primary={true} isDisabled={false} label="Konwertuj"/>
        </FormRow>
        
    </form>
  );
}

const FormRow = styled.div`
    display: flex;
`