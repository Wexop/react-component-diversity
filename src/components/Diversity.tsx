import {ReactNode} from "react";

type ColorObjectProp = { [p: number]: string }

const Diversity = (props: {
    component: (p: { colors: ColorObjectProp}) => ReactNode, colorLength: number
}) => {

    const turnNumber = 200

    const tab = []

    for (let i = 0; i < turnNumber; i++) {
        tab.push(i + 1)
    }

    const getRandom255 = () => {
        return Math.round(Math.random() * 255)
    }

    const generateColors = () => {
        const object: ColorObjectProp = {}
        for (let i = 0; i < props.colorLength; i++) {
            object[i+1] = `rgba(${getRandom255()}, ${getRandom255()}, ${getRandom255()}, 1)`
        }

        return object
    }

    return (<div style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '100%', flexWrap: 'wrap' }}>
        {tab.map((_o, index) => {
            const Element = () => props.component({colors: generateColors()})
            return <Element key={index} />
        })}
    </div>)

}

export default Diversity
