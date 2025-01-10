import clsx from 'clsx';

const services: string[] = [
  'Маникюр',
  'Массаж',
  'Услуги косметолога',
  'Репетитор',
];

interface Props {
  className?: string;
}

export const ServicesList = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        'grid',
        'gap-5',
        'grid-flow-col',
        'justify-start'
      )}
    >
      {services.map((service) => (
        <button
          className={clsx(
            'inline-block',
            'px-5',
            'py-3',
            'rounded-xl',
            'backdrop-blur',
            'text-white',
            'bg-zinc-900/50',
            'hover:bg-zinc-700/10'
          )}
          key={service}
        >
          {service}
        </button>
      ))}
    </div>
  );
};
