import { useUserStore } from "@/stores/token";

export default function isLog() {
    const store= useUserStore();
    return store.token === "" ? false : store.token;
}
