let count = 0

export function uid() {
    return `chisel-${++count}`
}
