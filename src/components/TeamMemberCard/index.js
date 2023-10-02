import './TeamMemberCard.css'

//instead of using props, we can creat an object with the attributes we want
const TeamMemberCard = ({nome, img, cargo, bgColor}) => {
    return (
        //if the outer div wasn't necessary but, consiredring that react forces to have a single element
        // here, we could wrap the entire element in a <Fragment> tag
        <div className='teamMemberCard'>
            <div className='cabecalho' style={{backgroundColor:bgColor}}>
                <img src={img}/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    )
}

export default TeamMemberCard