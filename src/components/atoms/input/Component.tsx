import { motion } from "framer-motion";
import styles from "./styles.module.css";

export interface InputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string | number | readonly string[];
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  variants?: any;
  id?: string;
}

const Input = ({ ...props }: InputProps) => {
  const Input = props.variants ? motion.input : "input";

  return <Input className={styles.input} {...props}></Input>;
};

export default Input;
