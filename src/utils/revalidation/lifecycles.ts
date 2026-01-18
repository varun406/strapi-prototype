import { triggerRevalidation } from "./triggerRevalidation";

export async function handleLifecycle(event: any, action: any) {
    const { result, model } = event;
    console.log("result>>>>>>>>>>>>>>>>>>>>", result, "model", model)
    if (!result?.id || !result?.slug) return;

    await triggerRevalidation({
        uid: model.uid,
        event: action,
        entry: { id: result.id, slug: result.slug },
    });
}
