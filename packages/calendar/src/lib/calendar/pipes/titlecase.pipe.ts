// replace with common titlecase pipe in angular 4, mind the regex with special characters (e.g. é)

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Helper method to transform a single word to titlecase.
 *
 * @stable
 */
function titleCaseWord(word: string) {
  if (!word) {
	  return word;
  }

  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

/**
 * Transforms text to titlecase.
 *
 * @stable
 */
@Pipe({name: 'titlecase'})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
	if (!value || typeof value !== 'string') {
		return value;
	}

	return value.split(/\s/g).map(word => titleCaseWord(word)).join(' ');
  }
}
