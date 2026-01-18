import type { RevalidatePayload } from "./types";

const REVALIDATE_URL = process.env.NEXT_REVALIDATE_URL!;
const SECRET = process.env.REVALIDATE_SECRET!;

export async function triggerRevalidation({
    uid,
    event,
    entry,
}: {
    uid: string;
    event: RevalidatePayload["event"];
    entry: any;
}) {

    const payload: RevalidatePayload = {
        source: "strapi",
        uid,
        event,
        entry: {
            id: entry.id,
            slug: entry.slug,
        },
    };

    try {
        await fetch(REVALIDATE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-revalidate-secret": SECRET,
            },
            body: JSON.stringify(payload),
        });
    } catch (err) {
        console.error("Revalidation failed:", err);
    }
}
