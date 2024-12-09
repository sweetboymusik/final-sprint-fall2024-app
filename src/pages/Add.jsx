import Page from "../components/Page";

function Add({ label, FormComponent }) {
  return (
    <Page label={label}>
      <FormComponent isNew={true} />
    </Page>
  );
}

export default Add;
