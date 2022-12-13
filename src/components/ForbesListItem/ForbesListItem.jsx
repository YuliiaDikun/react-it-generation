export const ForbesListItem = ({avatar, name}) => {
    return (
        <li>
             <img
                src={avatar}
                alt={name}
            />
            <h3>{name}</h3>
        </li>
    )

}