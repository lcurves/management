import {service} from "../../management-service";
import {PROFILE_ITEM_URI, PROFILES_URI, PROFILE_KEY} from "./profiles.consts";
import {getItem, getList, getById} from "./profiles.api";

export default function profilesModule() {
    const app = service().app;

    app
        .get(PROFILES_URI, getList)
        .get(PROFILE_ITEM_URI, getItem)
        .param(PROFILE_KEY, getById);
}
