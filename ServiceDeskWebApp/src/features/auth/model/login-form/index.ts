import { createForm } from '@/lib/factories/create-form';

import { loginFormSchema } from './schema';

export const loginFormModel = createForm({
  zodSchema: loginFormSchema,
  initialData: {
    username: '',
    password: '',
  },
  handleSubmit: (values) => {
    console.log('Submitted!', values);
  },
});
