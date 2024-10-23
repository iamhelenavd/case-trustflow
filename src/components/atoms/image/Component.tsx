import clsx from "clsx";
import { formData } from "../../../utils/mockData/formData";
import styles from "./styles.module.css";

export interface IamgeProps {
  styling?: "header";
}

const Image = (props: IamgeProps) => {
  return (
    <img
      loading="lazy"
      src="src/assets/images/logoTrustFlow.png"
      alt={formData.logo.alt}
      className={clsx(styles.image, {
        [styles.header]: props.styling === "header",
      })}
      {...props}
    />
  );
};

export default Image;
