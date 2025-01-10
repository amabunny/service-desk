import { LandingPageLoginForm } from '@/features/auth';
import { BaseTemplate } from '@/shared/landing-ui';

export const LoginPage = () => {
  return (
    <BaseTemplate container containerVerticalIndents>
      <LandingPageLoginForm />
    </BaseTemplate>
  );
};

export default LoginPage;
