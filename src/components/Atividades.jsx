import "../styles/Atividades.css"
import InfoUsers from "./user.js"

export default props => {
    return(
        
        <div className="activity-info">
            <hr />
            <div className="user-info">
                <img className="user-img" src={InfoUsers.imgUser} alt="icon-product" />
                <p className="username">{InfoUsers.user}</p>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam voluptas nesciunt hic impedit dolorum nulla harum et accusantium nam, quo tempore maiores exercitationem, eum eveniet accusamus veritatis beatae inventore.</p>
            </div>
        </div>
    )
}