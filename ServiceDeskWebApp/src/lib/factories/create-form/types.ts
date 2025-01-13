export type FormErrorsList<T extends Record<string, unknown>> = {
  [key in keyof T]?: [
    {
      message: string;
    },
  ];
};

export class FormError<T extends Record<string, unknown>> extends Error {
  errorsList: FormErrorsList<T>;

  constructor(errors: FormErrorsList<T>) {
    super();
    this.errorsList = errors;
  }
}
