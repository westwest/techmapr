import  { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material"
import FormGrid from "src/shared/components/FormGrid"

const KEY = "AddTechModal"

const SimpleSelect = ({label, value, onChange: handleChange}) => (
    <FormControl fullWidth>
        <InputLabel id="">{label}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={handleChange}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
)


const AddTecModal = ({open, onClose, onSubmit}) => {
    return (
        <Dialog open={open}>
            <DialogTitle>Add Technology</DialogTitle>
            <DialogContent>
                <FormGrid
                    inputs={[
                        {component: <TextField fullWidth label="Name" variant="standard" />},
                        {component: <TextField fullWidth label="Description" minRows={2} multiline variant="standard" />}
                    ]}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddTecModal
