/**
 * Convert Pixels to Rem
 * @param pixels - Pixels balue to be converted
 * @return - The converted Rem Value
 */

export function pxToRem(pixels: number): string {
    return `${pixels / 16}rem`
}