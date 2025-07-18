import type { ReactNode } from 'react';
import { FormControl, FormItem, FormLabel, FormMessage } from '../ui/form';

type FormItemFieldProps = {
  label: string;
  children: ReactNode;
};

export function FormItemField({ label, children }: FormItemFieldProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
