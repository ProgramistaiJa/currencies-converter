import React from 'react';
import { FieldError, UseFormRegister } from "react-hook-form";
import styled from 'styled-components'
import { Inputs } from '../views/Form/Form';

interface InputProps{
    /**
     * Button contents
     */
    label: string;
    /**
     * Name and id for input
     */
    inputName: "result" | "amount",
    // TODO: Fix type for inputName

    /**
     * Options array
     */
    error?: FieldError | undefined,

    register: UseFormRegister<Inputs>,
    required: boolean,
    placeholder?: string
}

export const Input = ({
    label,
    inputName,
    error,
    register,
    required,
    placeholder,
    ...props
  }: InputProps) => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    return (
        <InputContainer>
            <StyledInput>
                <label htmlFor={inputName}>{label}</label>
               {/* register your input into the hook by invoking the "register" function */}
                <input placeholder={placeholder} {...register(inputName, { required: required })} {...props} />
                {/* errors will return when field validation fails  */}
                {error && <span>This field is required</span>}
            </StyledInput>
        </InputContainer>
      
    );
  };

const InputContainer = styled.div``
const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
`