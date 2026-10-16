import { form, getRequestEvent } from '$app/server';
import { accountSchema, stringSchema } from '#lib/schema.ts';
import * as v from 'valibot';

export const login = form(
  accountSchema,
  ({ name, _password }) => {
    const { cookies } = getRequestEvent();
    
  }
)

export const signup = form(
  v.object({
    ...accountSchema.entries, phone: stringSchema,
  }),
  ({ name, _password, phone }) => {
    
  }
)