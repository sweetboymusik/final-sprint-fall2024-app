import Page from "../components/Page";
import CityForm from "../components/CityForm";

function Add() {
  return (
    <Page label={"Add | "}>
      <CityForm isNewCity={true} />
    </Page>
  );
}

export default Add;
