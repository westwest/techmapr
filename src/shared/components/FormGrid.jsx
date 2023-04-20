import { Grid } from "@mui/material"

const FormGrid = ({inputs = []}) => (
    <Grid
        container
        spacing={2}
    >
        { inputs.map((input,i) => (
            <Grid key={i} item sm={input.cols ?? 12}>
                {input.component}
            </Grid>
        )) }
    </Grid>
)

export default FormGrid
