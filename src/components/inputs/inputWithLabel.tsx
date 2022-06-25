import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React, { useState } from 'react'
import colors from "../../theme/colors"

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


const InputWithLabel = ({ label, value }) => {
    const [inputValue, setInputValue] = useState(value)
    return (
        <CustomGrid container alignItems='center'
            justifyContent='center'>
            <Typography variant='body1' sx={{
                width: '11%', fontWeight: 600, "@media (max-width:600px)": {
                    width: '22%',
                },
            }}>{label}</Typography>
            <span style={{ margin: '0 0.2rem', fontWeight: 900 }}>:</span>
            <input style={InputStyles} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </CustomGrid>
    )
}

export default InputWithLabel