import React from 'react'
import { TextField,Box,MenuItem, Typography} from '@mui/material'
import css from './Employee.module.css'
const Employee = ({employees,selectTeam,handleChange,handleCardClick}) => {
  return (
    <div>
        <div className={css.title}>
        <Typography variant='h3' className={css.h3}>Team Allocation App</Typography>
        <Typography variant='h5' className={css.h3}>{selectTeam} : {employees.filter(employee=>employee.teamName===selectTeam).length}</Typography>
        <Box width="150px" className={css.box}>
            <TextField  label="Select Team" select value={selectTeam} onChange={handleChange} fullWidth>
                <MenuItem value="TeamA">Team A</MenuItem>
                <MenuItem value="TeamB">Team B</MenuItem>
                <MenuItem value="TeamC">Team C</MenuItem>
                <MenuItem value="TeamD">Team D</MenuItem>
            </TextField>
        </Box>
        </div>
        <div className={css.card}>
        {employees?.map((employee)=>(
            <div key={employee.id} id={employee.id} className={(employee.teamName===selectTeam?css.wrappershadow:css.wrapper)} onClick={handleCardClick}>
                <div className={css.details}>
                    <h3>Full Name: {employee.fullName}</h3>
                    <p><b>Designation:</b> {employee.designation}</p>
                </div>
            </div>

        ))}
        </div>
    </div>
  )
}
export default Employee
