import { z } from 'zod';

export const localStorageThemeSchema = z.enum(['light', 'dark']);
