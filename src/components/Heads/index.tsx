import { FC, PropsWithChildren, ReactElement, useState } from 'react'
import { number } from 'prop-types'
import MattsHead from '../MattsHead'
import css from './heads.css'

interface Props {
  count: number
}

const Heads: PropsWithChildren<Props> = (props: Props) => {
  const { count = 10 } = props
  const [heads, setHeads] = useState<ReactElement[]>([])

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  setHeads((heads) => [
    ...heads,
    <MattsHead
      bgColor={getRandomColor()}
      className='bb'
      color={getRandomColor()}
      key={i}
    />,
  ])

  return <>{heads}</>
}

export default Heads
