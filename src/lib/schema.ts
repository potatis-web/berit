import * as v from 'valibot';

export const stringSchema = v.pipe(v.string(), v.nonEmpty(), v.minLength(3));
export const passwordSchema = v.pipe(stringSchema, v.minLength(8));
export const accountSchema = v.object({ name: stringSchema, _password: passwordSchema });