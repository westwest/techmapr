import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useParams } from "react-router-dom"
import FormGrid from "src/shared/components/FormGrid"
import { useRadarStore } from "src/shared/RadarStore"

const ItemInfo = () => {
    const {radarId, itemId} = useParams()
    const { getRadar } = useRadarStore()
    const radar = getRadar(radarId)

    return (
        <Card>
            <CardContent>
                <FormGrid
                    inputs={[
                        {component: <TextField fullWidth label="Name" />},
                        {
                            component: 
                                <FormControl fullWidth>
                                    <InputLabel id="quadrants_select">Quadrant</InputLabel>
                                    <Select labelid="quadrants_select" label="Quadrant">
                                        { radar.quadrants.map(q => (
                                            <MenuItem key={q}>{q}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>,
                            cols: 6
                        },
                        {
                            component: 
                                <FormControl fullWidth>
                                    <InputLabel id="tags_select">Tags</InputLabel>
                                    <Select labelid="tags_select" label="Tags">
                                        { radar.quadrants.map(q => (
                                            <MenuItem key={q}>{q}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>,
                            cols: 6
                        },
                        {component: <TextField fullWidth label="Description" multiline rows="5" />}

                    ]}
                />
            </CardContent>
        </Card>
    )
}

export default ItemInfo
