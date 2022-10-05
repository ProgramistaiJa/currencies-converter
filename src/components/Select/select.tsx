import React from 'react';
import styled from 'styled-components'

interface SelectProps{
    /**
     * Button contents
     */
    label: string;
    /**
     * Name and id for select
     */
    selectName: string,

    /**
     * Options array
     */
    options: String[]
}


/**
 * Primary UI component of the user interface to select values
 */
 export const Select = ({
    label,
    selectName,
    options,
    ...props
  }: SelectProps) => {
    return (
        <SelectContainer>
            <StyledSelect>
                <label htmlFor={selectName}>{label}</label>
                <select name={selectName} id={selectName}>
                    {options && options.map((option, index) => (
                        <option key={index} value={option.toLowerCase()}>
                            {option}
                        </option>
                    ))}
                </select>
            </StyledSelect>
        </SelectContainer>
      
    );
  };

  const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
  `
  const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;

  `