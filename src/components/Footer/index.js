import React from 'react';
import { Layout, Pagination } from 'antd';

const Footer = ({ count, onSearch }) => <Layout.Footer style={{
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0
}}>
    <Pagination defaultCurrent={1} total={count} onChange={(page) => onSearch(`page=${page}`)} showSizeChanger={false} />
</Layout.Footer>



export default Footer;