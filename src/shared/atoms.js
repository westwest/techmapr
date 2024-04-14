import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'

// ATOMS
const appFeaturesAtom = atom([])

export const AppAtoms = {
    appFeaturesAtom
}

export const AtomHooks = {
    useAtom,
    useAtomValue,
    useSetAtom
}
