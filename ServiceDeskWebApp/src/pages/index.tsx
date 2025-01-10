import { Landing } from '@/features/landing';
import { BaseTemplate } from '@/shared/landing-ui';

const IndexPage = () => {
  return (
    <BaseTemplate showFooter>
      <Landing />
    </BaseTemplate>
  );
};

export default IndexPage;
