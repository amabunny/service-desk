import { AdvantagesCards } from '../advantages-cards';
import { Banner } from '../banner';
import { PopularMasters } from '../popular-masters';
import { ServiceSearchForm } from '../service-search-form';

export const Landing = () => {
  return (
    <>
      <Banner />
      <AdvantagesCards />
      <ServiceSearchForm />
      <PopularMasters />
    </>
  );
};
