import { ConfigProvider } from 'antd';

import { Router } from '../router';

export const App = () => {
  return (
    <ConfigProvider
      theme={{ cssVar: true, components: { Layout: { headerHeight: 44 } } }}
    >
      <Router />
    </ConfigProvider>
  );
};
