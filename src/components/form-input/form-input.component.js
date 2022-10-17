import {Group,Input,FormInputLabel} from './form-input.styles.js'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <Input onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel shrink ={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      ) }
    </Group>
  );
};
export default FormInput;
