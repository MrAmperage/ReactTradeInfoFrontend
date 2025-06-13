import React from 'react';
import {Layout, Menu} from 'antd';
import ContentContainerComponent from "../ContentContainerComponent/ContentContainerComponent"

const { Header, Content, Sider } = Layout;
const Application: React.FC = () => {
  return (
    <Layout>
      <Header>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"/>
        </Sider>
        <Layout>
          <Content>
       <ContentContainerComponent/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Application

