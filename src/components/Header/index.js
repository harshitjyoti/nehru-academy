import React from 'react';
import { Layout, Input, Popover, Anchor, Avatar } from 'antd';
let timer;
const Header = ({ onSearch, isProcessing, user, logout }) => {
  const searchValue = (event) => {
    const { value } = event.target
    clearTimeout(timer)
    timer = setTimeout(() => {
      onSearch(`search=${value}`);
    }, 500)
  }
  return (<Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
    <div style={{ textAlign: "center" }}>
      <Input.Search onChange={searchValue} style={{ width: '50%' }} enterButton={false} size='middle' maxLength='20' placeholder="Search for Planets here !" loading={isProcessing} />
      <Popover content={<Anchor onClick={logout}><Anchor.Link title='Logout' /></Anchor>} title="You Can:">
        <Avatar style={{
          float: 'right',
          margin: 13
        }} size="large">
          {user.charAt(0)}
        </Avatar>
      </Popover>
    </div>
  </Layout.Header>)
}

export default Header;