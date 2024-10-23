import { motion } from "framer-motion";
import styles from "./styles.module.css";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  type: "button" | "submit";
  onClick?: () => void;
  variants?: any;
  className?: string;
  isSubmitted?: boolean;
}

const Button = ({ label, ...props }: ButtonProps) => {
  const Button = props.variants ? motion.button : "button";

  return (
    <Button
      className={clsx(
        styles.button,
        {
          [styles.isSubmitted]: props.isSubmitted,
        },
        props.className,
      )}
      {...props}
    >
      {label}
    </Button>
  );
};

export default Button;
