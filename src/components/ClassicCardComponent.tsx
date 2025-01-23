const ClassicCardComponent = (props: { borderColor: string, textColor: string, backgroundColor: string }) => {

    return (
        <div style={{
            backgroundColor: props.backgroundColor,
            borderColor: props.borderColor,
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
            maxWidth: 350,
            borderStyle: 'solid'
        }}>
            <h2 style={{color: props.textColor}}>Super card</h2>
            <p style={{color: props.textColor}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                consequuntur labore laboriosam nesciunt quas!</p>
        </div>
    )
}

export default ClassicCardComponent
