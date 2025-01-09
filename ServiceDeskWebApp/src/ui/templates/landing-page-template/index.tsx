import { UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router';

import classes from './style.module.css';

type Props = PropsWithChildren;

const { Header, Content, Footer } = Layout;

export const LandingPageTemplate = ({ children }: Props) => {
  const location = useLocation();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className={classes.layout}>
      <Header className={classes.header}>
        <Typography.Text className={classes.logoText}>
          ServiceDesk
        </Typography.Text>

        <Menu
          selectedKeys={[location.pathname]}
          theme="dark"
          mode="horizontal"
          items={[{ key: '/', label: 'Мастера' }]}
          className={classes.menu}
        />

        <div>
          <Avatar icon={<UserOutlined />} />
        </div>
      </Header>

      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />

        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className={classes.contentContainer}
        >
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        ServiceDesk {new Date().getFullYear()} Created by Sergei Antipin
      </Footer>
    </Layout>
  );
};
