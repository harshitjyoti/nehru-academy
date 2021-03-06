import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import InitApp from './container';
import Exercise from './container/exercises';
import Homework from './container/homework';
import Results from './container/results';
import { Drawer, Button, Tabs } from 'antd';
import Admin from './container/Admin';
import logo from "./logo.png"
import { DownOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
export const db = new window.restdb("5e876350111788414066c610");

const App = () => {

  const [visible, setVisible] = useState(false);

  const { TabPane } = Tabs;
  const showDrawer = () => setVisible(true)

  const onClose = () => setVisible(false)
  return (<>
    <Link to={'/'} >
      <div className='header'><img src={logo} width="150px" /> Nehru Academy</div>
    </Link>
    <div className='btn'>
      <Button onClick={showDrawer}>
        <MenuUnfoldOutlined /> Open This
      </Button>
      <Drawer
        title="Nehru Academy"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Tabs defaultActiveKey="1" tabPosition={'vertical'} style={{ height: 220 }}>
          <TabPane key={'1'}>
            <Link to={'/'} onClick={onClose}>Go Home</Link><hr />
            <Link to={'/exercises'} onClick={onClose}>Daily Exercise</Link><hr />
            <Link to={'/homework'} onClick={onClose}>Daily Homework</Link><hr />
            <Link to={'/results'} onClick={onClose}>Results</Link><hr />
          </TabPane>
        </Tabs>
      </Drawer>
    </div>
    <Route exact path='/' component={InitApp} />
    <Route exact path='/exercises' component={Exercise} />
    <Route exact path='/results' component={Results} />
    <Route exact path='/homework' component={Homework} />
    <Route exact path='/admin' component={Admin} />
  </>
  );
}

export default App;
