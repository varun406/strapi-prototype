import { handleLifecycle } from "../../../../utils/revalidation/lifecycles";

export default {
    afterCreate: (event) => handleLifecycle(event, "create"),
    afterUpdate: (event) => handleLifecycle(event, "update"),
    afterDelete: (event) => handleLifecycle(event, "delete"),
};