import { api } from "./api";

export default class ApiAccessor<B, R> {
    private _path: string;
    private _ref: Ref<R | null>;

    constructor(path: string) {
        this._path = path;
        this._ref = ref(null);
    }
    ref(body?: B): typeof this._ref {
        api(this._path, body)
            .then(v => this._ref.value = v)
            .catch(e => console.log(this._path + ' api request error', e))
        return this._ref
    }
    async req(body?: B): Promise<Awaited<R>> {
        return api(this._path, body);
    }
}
