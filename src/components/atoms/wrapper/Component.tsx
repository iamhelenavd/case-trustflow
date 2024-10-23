import styles from "./styles.module.css";
import clsx from "clsx";

export interface WrapperProps {
  gridArea?: "content" | "full";
  children?: React.ReactNode;
  itemPosition?: "center";
}

const Wrapper = (props: WrapperProps) => {
  const { gridArea, itemPosition, ...rest } = props;
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.content]: gridArea === "content",
        [styles.full]: gridArea === "full",
        [styles.center]: itemPosition === "center",
      })}
      {...rest}
    />
  );
};

export default Wrapper;
