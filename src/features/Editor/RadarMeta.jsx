import { Card, CardContent, TextField } from "@mui/material"
import { useParams } from "react-router-dom"
import FormGrid from "src/shared/components/FormGrid"
import { useRadarStore } from "src/shared/RadarStore"

const RadarMeta = () => {
    const {radarId} = useParams()
    const {getRadar} = useRadarStore()

    return (
        <Card>
            <CardContent>
                <FormGrid inputs={[
                    {component: <TextField defaultValue={getRadar(radarId).name} fullWidth label="Radar Name" />},
                    {component: <TextField fullWidth multiline rows={5} label="Description" />}
                ]} /> 
            </CardContent>
        </Card>
    )
}

export default RadarMeta
