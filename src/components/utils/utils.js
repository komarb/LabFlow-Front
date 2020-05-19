export function ISOtoLocal(iso) {
    const date = new Date(iso);
    const local = date.toLocaleString()
    return local
}