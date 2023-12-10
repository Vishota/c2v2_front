let a = false;
export default function use() {
    const b = a;
    a = true;
    return !b;
}