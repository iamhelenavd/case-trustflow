import { useState } from "react";
import SummaryCard from "../../molecules/summaryCard/Component";
import RequestForm, { RequestSchema } from "../../organisms/form/Component";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import Wrapper from "../../atoms/wrapper/Component";
import { startConfetti } from "../../../utils/animations/confetti/confetti";
import Image from "../../atoms/image/Component";

function RequestSection() {
  const { getItem, setItem, removeItem } = useLocalStorage<
    RequestSchema | undefined
  >("formValues");
  const [formValue, setFormValue] = useState<RequestSchema | undefined>();
  const [summary, setSummary] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (value: RequestSchema) => {
    setFormValue(value);
    setSummary(true);
    setItem(value);
  };

  const handleSummarySubmit = () => {
    console.log("isSubmitted 🎉", getItem());
    setIsSubmitted(true);
    startConfetti();
    removeItem();
  };

  const handleBack = () => {
    setSummary(false);
  };

  return (
    <div className="grid">
      <Wrapper gridArea="content" itemPosition="center">
        <Image styling="header" />
        {!summary || !formValue ? (
          <RequestForm onFormSubmit={handleFormSubmit} />
        ) : (
          <SummaryCard
            isSubmitted={isSubmitted}
            formValue={formValue}
            onHandleBack={handleBack}
            onSummarySubmit={handleSummarySubmit}
          />
        )}
      </Wrapper>
    </div>
  );
}

export default RequestSection;
