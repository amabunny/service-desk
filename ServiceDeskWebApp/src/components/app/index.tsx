import { ConfigProvider } from 'antd';

import { Router } from '../router';

export const App = () => {
  return (
    <ConfigProvider theme={{ cssVar: true }}>
      <Router />
    </ConfigProvider>
  );
};
