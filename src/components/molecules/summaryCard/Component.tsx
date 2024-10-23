import { motion } from "framer-motion";
import styles from "./styles.module.css";
import clsx from "clsx";
import Button from "../../atoms/button/Component";
import { formData } from "../../../utils/mockData/formData";
import {
  container,
  item,
} from "../../../utils/animations/framerMotion/variants";
import keyframe from "../../../utils/animations/keyFrames/wave.module.css";
import { RequestSchema } from "../../organisms/form/Component";

interface SummaryCardProps {
  onHandleBack: () => void;
  onSummarySubmit: () => void;
  className?: string;
  formValue: RequestSchema;
  isSubmitted?: boolean;
}

const SummaryCard = (props: SummaryCardProps) => {
  const { formValue, onHandleBack, onSummarySubmit } = props;

  return (
    <>
      <motion.div
        initial="hidden"
        variants={container}
        animate="visible"
        className={clsx(styles.card, props.className)}
      >
        <motion.h1 variants={item}>
          {formData.form.welcome}
          <span className={keyframe.wavingHandEmoji}> 👋</span>
        </motion.h1>
        <motion.h2 variants={item}>
          {formValue.firstName} {formValue.lastName}
        </motion.h2>
        <motion.h3 variants={item}>{formData.form.summary.check}</motion.h3>
        <motion.li variants={item}>{formValue.firstName}</motion.li>
        <motion.li variants={item}>{formValue.lastName}</motion.li>
        <motion.li variants={item}>{formValue.dateOfBirth}</motion.li>
        <motion.li variants={item}>{formValue.email}</motion.li>
        <motion.li variants={item}>{formValue.list}</motion.li>
        <Button
          variants={item}
          type="button"
          onClick={onHandleBack}
          isSubmitted={props.isSubmitted}
          label={
            props.isSubmitted
              ? `${formData.button.thanks}`
              : `${formData.button.edit}`
          }
        />
        <Button
          variants={item}
          onClick={onSummarySubmit}
          isSubmitted={props.isSubmitted}
          label={
            props.isSubmitted
              ? `${formData.button.submitted}`
              : `${formData.button.send}`
          }
          type="submit"
        />
      </motion.div>
    </>
  );
};

export default SummaryCard;
