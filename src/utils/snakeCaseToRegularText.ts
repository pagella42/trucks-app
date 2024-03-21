export function snakeCaseToRegularText(input: string): string {
    const words = input.split('_');
    const transformedWords = words.map((word, index) => 
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase()
    );
    return transformedWords.join(' ');
  }