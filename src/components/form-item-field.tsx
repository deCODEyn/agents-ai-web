import type { FormItemFieldProps } from './props/form-item-field-props';
import { FormControl, FormItem, FormLabel, FormMessage } from './ui/form';

export function FormItemField({ label, children }: FormItemFieldProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
