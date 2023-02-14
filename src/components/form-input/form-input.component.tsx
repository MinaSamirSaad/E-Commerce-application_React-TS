import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import { Group, Input, FormInputLabel } from "./form-input.styles";

export type FormInputProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <Group>
      <Input onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
