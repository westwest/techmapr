import {createContext, useContext, useReducer} from 'react'

const QUADRANTS = [
    "Languages & Framework", 
    "Infrastructure & Platforms",
    "Techniques & Methods",
    "Build, Bundle & Test"
]

const initialState = [
    {id: "123", name: "Mock 1", quadrants: QUADRANTS},
    {id: "231wda", name: "Mock 2", quadrants: QUADRANTS}
]

const actions = {
    UPSERT_RADAR: "_RADAR",
    REMOVE_RADAR: "REMOVE_RADAR",
    UPDATE_RADAR_FIELD: "UPDATE_RADAR_FIELD",
    UPSERT_RADAR_ITEM: "UPSERT_RADAR_ITEM",
    REMOVE_RADAR_ITEM: "REMOVE_RADAR_ITEM",
}

const actionsMap = {
    [actions.UPSERT_RADAR]: (state, payload) => 
        state.find(r => r.id === payload.id) ? 
            [payload, ...state.filter(r => r.id !== payload.id)] :
            [{...payload, quadrants: QUADRANTS}, ...state],
    [actions.UPDATE_RADAR_FIELD]: (state, payload) => 
        state.map(r => r.id === payload.id) ? ({
            ...r, [payload.field]: payload.value
        }) : r,
    [actions.UPSERT_RADAR_ITEM]: (state, payload) => [
        ...state.filter(r => r.id !== payload.id), 
        {...state.find(r => r.id === payload.id), [payload.field]: payload.value}
    ]
}

const reducer = (state, action) => 
    actionsMap[action.type](state, action.payload) ?? state

const Context = createContext()

export const RadarStore = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        store: state,
        getRadar: id => state.find(r => r.id === id),
        createRadar: radarForm => {
            const id = `ID%${btoa(radarForm.name)}`
            dispatch({type: actions.UPSERT_RADAR, payload: {id: id, ...radarForm}})
            return id
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>)
}

export const useRadarStore = () => useContext(Context)
