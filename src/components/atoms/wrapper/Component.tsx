import styles from "./styles.module.css";
import clsx from "clsx";

export interface WrapperProps {
  gridArea?: "content" | "full";
  children?: React.ReactNode;
  itemPosition?: "center";
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.content]: props.gridArea === "content",
        [styles.full]: props.gridArea === "full",
        [styles.center]: props.itemPosition === "center",
      })}
      {...props}
    />
  );
};

export default Wrapper;
