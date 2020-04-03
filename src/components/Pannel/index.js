import React from 'react';
import { Collapse, Badge } from 'antd';
import { getColor } from '../../helpers';
import { icons } from '../../constants';
Math.floor(Math.random() * 10)
const getExtra = (population, color) => <Badge style={{ backgroundColor: color }} count={parseInt(population).toLocaleString()} />

const getHeader = (name, color) => <>
{icons[Math.floor(Math.random() * 10)]}
<span style={{ color, fontWeight: 'bold', textDecoration: "underline" }} >{name}</span>
</>
const Pannel = ({ planets }) => {
  return planets.map((item, index) => {
    const color = getColor(item.population)
    return <Collapse key={index}>
      <Collapse.Panel header={getHeader(item.name, color)} key="1" extra={getExtra(item.population, color)}>
        {Object.keys(item).map((i, index) => (
          <span key={index}><b>{i.replace(/_/g, ' ').toUpperCase()}</b> : {item[i]}<hr /></span>
        ))}
      </Collapse.Panel>
    </Collapse>
  }
  )
}

export default Pannel;