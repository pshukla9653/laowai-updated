import classNames from 'classnames'


const Plate = ({image, className, children, alt, ...props}) => {
  return (
    <div className={classNames('plate', className)} {...props}>
      <img src={image} className={'plate-overlay'} alt={alt} />
      <img className={'plate-main'} src={'/images/misc/plate.png'} alt={'plate'} />
      {children}
    </div>
  )
}

export default Plate
