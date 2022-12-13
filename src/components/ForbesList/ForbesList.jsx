import { ForbesListItem } from "components/ForbesListItem/ForbesListItem"

export const ForbesList = ({list}) => {
    return (
        <div>
  <div>
    <div>
      <h3>Forbes</h3>
      <p>Leader board</p>
    </div>
  </div>

  <ul>
    {list.map(({id, name, capital, avatar, isIncrease}) => {
        return (
            <ForbesListItem key={id} avatar={avatar} name={name}/>
        )
    })}
  </ul>
</div>
    )

}