import React from 'react';
import {Layout, Menu} from 'antd';

const { Header, Content, Sider } = Layout;
const Application: React.FC = () => {
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            className='Menu'
          />
        </Sider>
        <Layout>
          <Content>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Application

