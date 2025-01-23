import {ReactNode} from "react";

type ColorObjectProp = { [p: number]: string }
type SizeObjectProp = { [p: number]: number }

type DiversityObjectProp = {color: ColorObjectProp, size: SizeObjectProp}

const Diversity = (props: {
    component: (p: DiversityObjectProp) => ReactNode, size?: number
}) => {

    const turnNumber = props.size ?? 200

    const tab = []

    for (let i = 0; i < turnNumber; i++) {
        tab.push(i + 1)
    }

    const getRandom255 = () => {
        return Math.round(Math.random() * 255)
    }

    const generateObject = () => {
        const object: DiversityObjectProp = {color: {}, size: {}}
        for (let i = 0; i < 20; i++) {
            object.color[i+1] = `rgba(${getRandom255()}, ${getRandom255()}, ${getRandom255()}, 1)`
            object.size[i+1] = Math.random()
        }

        return object
    }

    return (<div style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '100%', flexWrap: 'wrap' }}>
        {tab.map((_o, index) => {
            const diversity = generateObject()
            const Element = () => props.component(diversity)
            return <div onClick={() => alert(JSON.stringify(diversity))}><Element key={index} /></div>
        })}
    </div>)

}

export default Diversity
