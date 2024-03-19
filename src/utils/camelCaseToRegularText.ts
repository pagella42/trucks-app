export function camelCaseToRegularText(input: string): string {
    const result = input
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .toLowerCase()
        .replace(/^\w/, c => c.toUpperCase());
    
    return result;
}
