import { post } from "./request.config";

export async function fetchCompanies(body: any) {
    try {
        const data = await post('fetch-data', body);

        return data;
    } catch (err: any) {
        console.error(err);
        return err;
    };
};