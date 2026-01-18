// src/utils/revalidation/types.ts
export type RevalidatePayload = {
    source: "strapi";
    event: "create" | "update" | "publish" | "unpublish";
    uid: string;
    entry: {
        id: number;
        slug?: string;
    };
};
