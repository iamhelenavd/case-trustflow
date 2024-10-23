import { FieldApi, useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
import { localData } from "../../../utils/mockData/localData";
import { requestSchema } from "../../../utils/validation/requestSchema";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { motion } from "framer-motion";
import {
  container,
  item,
} from "../../../utils/animations/framerMotion/variants";
import Button from "../../atoms/button/Component";
import Label from "../../atoms/label/Component";
import styles from "./styles.module.css";
import Select from "../../atoms/select/Component";
import { formData } from "../../../utils/mockData/formData";
import Input from "../../atoms/input/Component";
import * as v from "valibot";

export type RequestSchema = v.InferInput<typeof requestSchema>;

interface RequestFormProps {
  onFormSubmit: (value: RequestSchema) => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onFormSubmit }) => {
  const { getItem } = useLocalStorage<RequestSchema | undefined>("formValues");

  const form = useForm({
    defaultValues: {
      firstName: getItem()?.firstName ?? "",
      lastName: getItem()?.lastName ?? "",
      dateOfBirth: getItem()?.dateOfBirth ?? "",
      email: getItem()?.email ?? "",
      list: getItem()?.list ?? "",
    },
    validatorAdapter: valibotValidator(),
    validators: {
      onSubmit: requestSchema,
    },
    onSubmit: async ({ value }) => {
      onFormSubmit(value); // Trigger the callback to notify parent
    },
  });

  function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <em
            className={styles.errorLabel}
            data-testid={`field-error-${field.name}`}
          >
            {field.state.meta.errors.join(".")}
          </em>
        ) : null}
      </>
    );
  }
  return (
    <motion.form
      initial="hidden"
      variants={container}
      animate="visible"
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <motion.h1 variants={item}>{formData.form.title}</motion.h1>
      <form.Field
        name="firstName"
        children={(field) => (
          <>
            <Label
              variants={item}
              htmlFor={field.name}
              label={formData.form.firstName}
            />
            <div className={styles.inputWrapper}>
              <Input
                data-testid={field.name}
                variants={item}
                placeholder={formData.form.placeholder.firstName}
                type="text"
                name={field.name}
                id={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => {
                  return field.handleChange(event.target.value);
                }}
              />
              <FieldInfo field={field} />
            </div>
          </>
        )}
      />
      <form.Field
        name="lastName"
        children={(field) => (
          <>
            <Label
              variants={item}
              label={formData.form.lastName}
              htmlFor={field.name}
            />
            <div className={styles.inputWrapper}>
              <Input
                variants={item}
                placeholder={formData.form.placeholder.lastName}
                type="text"
                id={field.name}
                data-testid={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          </>
        )}
      />
      <form.Field
        name="dateOfBirth"
        children={(field) => (
          <>
            <Label
              variants={item}
              htmlFor={field.name}
              label={formData.form.dateOfBirth}
            />
            <div className={styles.inputWrapper}>
              <Input
                variants={item}
                id={field.name}
                type="date"
                data-testid={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          </>
        )}
      />
      <form.Field
        name="email"
        children={(field) => (
          <>
            <Label
              variants={item}
              htmlFor={field.name}
              label={formData.form.email}
            />
            <div className={styles.inputWrapper}>
              <Input
                variants={item}
                placeholder={formData.form.placeholder.mail}
                type="email"
                id={field.name}
                data-testid={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          </>
        )}
      />
      <form.Field
        name="list"
        children={(field) => (
          <>
            <Label
              variants={item}
              label={formData.form.policyChoice}
              htmlFor={field.name}
            />
            <div className={styles.inputWrapper}>
              <Select
                label={formData.form.placeholder.select}
                id={field.name}
                variants={item}
                data-testid={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldInfo field={field} />
            </div>
            {field.state.value && (
              <motion.p className={styles.policy} variants={item}>
                {formData.form.selectedPolicy}
                {form.getFieldValue(field.name)
                  ? localData.find(
                      (item) => item.name === form.getFieldValue(field.name),
                    )?.info
                  : ""}
              </motion.p>
            )}
          </>
        )}
      />
      <Button
        type="submit"
        data-testid="submitForm"
        label={formData.button.check}
      />
    </motion.form>
  );
};

export default RequestForm;
