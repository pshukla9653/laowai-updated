

const BlindTigerRecipe = ({title, subtitle, price,discreption}) => {

  return (
    <div className={'blindTigerRecipe'}>
      <div className={'blindTigerRecipe-top'}>
        <span className={'blindTigerRecipe-name'}>{title}</span>
        <span className={'blindTigerRecipe-price'}>{price}</span>
      </div>
      <div>
      <i><span className={'blindTigerRecipe-discreption'}>{discreption}</span></i>
      </div>
      <div className={'blindTigerRecipe-bottom'}>
        <span className={'blindTigerRecipe-subtitle'}>{subtitle}</span>
      </div>
    </div>
  )
}

export default BlindTigerRecipe
