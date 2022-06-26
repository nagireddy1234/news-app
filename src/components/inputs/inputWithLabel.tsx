import React, { useEffect, useState, FC } from 'react'
import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import colors from "../../theme/colors"


interface InputWithLabelProps {
    label?: string,
    inputValue?: string
}

const CustomGrid = styled(Grid)({
    padding: '1rem',
    display: 'flex',
})

const InputStyles = {
    border: "none",
    outline: "none",
    borderRadius: '5px',
    backgroundColor: colors.lightGray,
    width: '50%',
    padding: '0.5rem',
    "&:hover": {
        border: "none",
        outline: "none",
    },
    "&:active": {
        border: "none",
        outline: "none",
    },
    "@media (max-width:600px)": {
        width: '70%',
    },
}


const InputWithLabel: FC<InputWithLabelProps> = ({ label, inputValue }) => {
    const [inValue, setInputValue] = useState<string>()
    useEffect(() => {
        setInputValue(inputValue)
    }, [setInputValue, inputValue])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    useEffect
    return (
        <CustomGrid container alignItems='center'
            justifyContent='center'>
            <Typography variant='body1' sx={{
                width: '11%', fontWeight: 600, "@media(max-width:600px)": {
                    width: '22%',
                },
            }}>{label}</Typography>
            <span style={{ margin: '0 0.2rem', fontWeight: 900 }}>:</span>
            <input style={InputStyles} value={inValue || ''} onChange={handleChange} disabled={label === 'API key'} />
        </CustomGrid>
    )
}

export default InputWithLabel