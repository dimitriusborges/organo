import './TeamMemberCard.css'
import {GiBootKick} from 'react-icons/gi'
import {AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

//instead of using props, we can creat an object with the attributes we want
const TeamMemberCard = ({id, name, img, cargo, bgColor, onRemoving, favorite, onMemberFavorite}) => {

    const onFavorite = () => {
        onMemberFavorite(id)
    }

    const attrFavorite = {
        size: 25,
        onClick: onFavorite
        }

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
                <h4>{name}</h4>
                <h5>{cargo}</h5>
                <div className='favorite'>
                    {favorite
                        ? <AiFillHeart {...attrFavorite} color='#FF0000'/>
                        : <AiOutlineHeart {...attrFavorite} />
                    }
                </div>
            </div>


        </div>
    )
}

export default TeamMemberCard