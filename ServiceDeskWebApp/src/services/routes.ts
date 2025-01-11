import { MenuItem } from '@/types/router';

export class RoutesService {
  static getIndex() {
    return '/';
  }

  static getFindMaster() {
    return '/find-master';
  }

  static getMyOrders() {
    return '/my-orders';
  }

  static getBecomeMaster() {
    return '/become-master';
  }

  static getLoginPage() {
    return '/login';
  }
}

export const mainLinks: MenuItem[] = [
  {
    title: 'Главная',
    path: RoutesService.getIndex(),
  },
  {
    title: 'Найти специалиста',
    path: RoutesService.getFindMaster(),
  },
  {
    title: 'Мои заказы',
    path: RoutesService.getMyOrders(),
  },
  {
    title: 'Стать исполнителем',
    path: RoutesService.getBecomeMaster(),
  },
];

export const aboutLinks: MenuItem[] = [
  {
    path: '',
    title: 'Новый заказ',
  },
  {
    path: '',
    title: 'Все услуги',
  },
  {
    path: '',
    title: 'Все отзывы',
  },
  {
    path: '',
    title: 'Условия использования',
  },
];

export const additionalLinks: MenuItem[] = [
  { title: 'Работа в Москве', path: '' },
  { title: 'Вход для специалистов', path: '' },
  { title: 'Партнерская программа', path: '' },
];

export const companyLinks: MenuItem[] = [
  {
    title: 'О компании',
    path: '',
  },
  {
    title: 'Вакансии',
    path: '',
  },
  {
    title: 'Жизнь в ServiceDesk',
    path: '',
  },
  {
    title: 'Блог',
    path: '',
  },
];
