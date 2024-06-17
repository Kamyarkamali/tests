export interface Ichildren {
  children: JSX.Element;
}

export interface ImenuNavbar {
  id: number;
  image: any;
  title: string;
  icon: string;
}

export interface IclassName {
  className?: string;
}

export interface Isaidbar {
  id: number;
  title?: string;
  icon: JSX.Element;
  notif?: number;
  paths: string;
  arrowIcon?: JSX.Element;
}

export interface Ifill {
  fill?: string;
}
