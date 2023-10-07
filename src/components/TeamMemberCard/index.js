import './TeamMemberCard.css'
import {GiBootKick} from 'react-icons/gi'

//instead of using props, we can creat an object with the attributes we want
const TeamMemberCard = ({id, nome, img, cargo, bgColor, onRemoving}) => {
    return (
        //if the outer div wasn't necessary but, consiredring that react forces to have a single element
        // here, we could wrap the entire element in a <Fragment> tag
        <div className='teamMemberCard'>
            <GiBootKick size={25}
                        className='delete'
                        onClick={() => onRemoving(id)}/>
            <div className='cabecalho' style={{backgroundColor:bgColor}}>
                <img src={img} alt='Team member'/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>


        </div>
    )
}

export default TeamMemberCard