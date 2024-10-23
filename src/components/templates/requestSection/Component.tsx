import { useState } from "react";
import SummaryCard from "../../molecules/summaryCard/Component";
import RequestForm, { RequestSchema } from "../../organisms/form/Component";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import Wrapper from "../../atoms/wrapper/Component";

function RequestSection() {
  const { getItem, setItem } = useLocalStorage<RequestSchema | undefined>(
    "formValues",
  ); // Hier geef je de key door
  const [formValue, setFormValue] = useState<RequestSchema | undefined>();
  const [summary, setSummary] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (value: RequestSchema) => {
    setFormValue(value);
    setSummary(true);
    setItem(value); // Hier slaat je de waarde op in localStorage
  };

  const handleSummarySubmit = () => {
    console.log("isSubmitted", getItem());
    setItem("");
    setIsSubmitted(true);
    startConfetti();
  };

  const handleBack = () => {
    console.log("back");
    setSummary(false);
  };
  return (
    <div className="grid">
      <Wrapper gridArea="content">
        <Image styling="header" />
        {!summary ? (
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
