import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material"
import { Add as AddIcon, ArrowBack as ArrowBackIcon} from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import FormGrid from "src/shared/components/FormGrid"
import { useRadarStore } from "src/shared/RadarStore"

const CreateRadar = () => {
    const navigate = useNavigate()
    const {createRadar} = useRadarStore()

    return (
        <Card sx={{maxWidth: "800px"}} variant="outlined">
            <CardHeader title="Create New Radar" />
            <CardContent>
                <FormGrid
                    inputs={[
                        {component: <TextField fullWidth label="Name" />},
                        {component: <TextField fullWidth label="Description" multiline rows={3} />},
                        {component: <TextField fullWidth defaultValue="Languages & Frameworks" label="Quadrant 1" />, cols: 6},
                        {component: <TextField fullWidth defaultValue="Infrastructure & Ops" label="Quadrant 2" />, cols: 6},
                        {component: <TextField fullWidth defaultValue="Methods & Patterns" label="Quadrant 3" />, cols: 6},
                        {component: <TextField fullWidth defaultValue="Tools" label="Quadrant 4" />, cols: 6}
                    ]}
                />
            </CardContent>
            <CardActions>
                <Button component={Link} to="/" startIcon={<ArrowBackIcon />}>Back</Button>
                <Button 
                    endIcon={<AddIcon/>} 
                    onClick={() => {
                        const id = createRadar({name: "TestTest"})
                        navigate(`../${id}`)
                    }} 
                    variant="contained">
                        Create
                    </Button>
            </CardActions>
        </Card>
    )
}

export default CreateRadar
