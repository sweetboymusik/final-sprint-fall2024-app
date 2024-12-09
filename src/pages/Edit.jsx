import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { useCallback, useEffect, useState } from "react";

function Edit({ FormComponent, fetchById, entityLabel }) {
  const { id } = useParams();
  const [entity, setEntity] = useState(null);

  const loadEntity = useCallback(async () => {
    try {
      const response = await fetchById(id);
      setEntity(response);
    } catch (error) {
      console.error(`Error fetching ${entityLabel}:`, error);
    }
  }, [id, fetchById, entityLabel]);

  useEffect(() => {
    loadEntity();
  }, [loadEntity]);

  if (!entity) {
    return <div>Loading...</div>;
  }

  return (
    <Page label={`Edit | ${entity.name || entityLabel}`}>
      <FormComponent entity={entity} />
    </Page>
  );
}

export default Edit;
