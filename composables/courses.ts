export async function search(query: string) {
    console.warn('search() is faked');
    return [1, 2, 3]
}
export async function load(id: number) {
    console.log(await api('/courses/get'), { id });
}