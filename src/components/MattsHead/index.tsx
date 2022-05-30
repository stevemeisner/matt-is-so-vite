import MattsHeadGPX from '../../img/matts-head.svg?component'

interface Props {
  bgColor?: string
  color?: string
  classes?: string
}

const MattsHead = ({
  bgColor = 'pink',
  color = 'rebeccapurple',
  classes = '',
}: Props) => {
  return (
    <div className='head'>
      <MattsHeadGPX
        className={`head matts-head ${classes}`}
        style={{ backgroundColor: bgColor, color: color }}
      />
    </div>
  )
}

export default MattsHead
