import { useEffect } from "react";
import Page from "../components/Page";

function Add({ label, FormComponent }) {
  useEffect(() => {
    document.title = label;
  }, [label]);

  return (
    <Page label={label}>
      <FormComponent isNew={true} />
    </Page>
  );
}

export default Add;
