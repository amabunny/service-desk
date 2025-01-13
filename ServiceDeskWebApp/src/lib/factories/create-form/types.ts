export type FormErrors<T extends Record<string, unknown>> = {
  [key in keyof T]?: [
    {
      message: string;
    },
  ];
};
