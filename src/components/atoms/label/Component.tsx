import { motion } from "framer-motion";
import styles from "./styles.module.css";

export interface LabelProps {
  variants?: any;
  htmlFor?: string;
  label: string;
}

const Label = ({ label, ...props }: LabelProps) => {
  const Label = props.variants ? motion.label : "label";

  return (
    <Label className={styles.label} {...props}>
      {label}
    </Label>
  );
};

export default Label;
