import './TeamMemberCard.css'

//instead of using props, we can creat an object with the attributes we want
const TeamMemberCard = ({nome, img, cargo}) => {
    return (
        <div className='teamMemberCard'>
            <div className='cabecalho'>
                <img src={img} alt='eu'/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    )
}

export default TeamMemberCard