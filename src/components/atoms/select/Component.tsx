import { Variants, motion } from "framer-motion";
import styles from "./styles.module.css";
import { localData } from "../../../utils/mockData/localData";

export interface SelectProps {
  variants?: Variants;
  htmlFor?: string;
  label: string;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string | number | readonly string[];
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  id?: string;
}

const Select = ({ label, ...props }: SelectProps) => {
  const Select = props.variants ? motion.select : "select";

  return (
    <Select className={styles.select} {...props}>
      <option value="" disabled defaultValue={""}>
        {label}
      </option>
      {localData.map((item, index) => (
        <option key={index} value={item.name}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};

export default Select;
