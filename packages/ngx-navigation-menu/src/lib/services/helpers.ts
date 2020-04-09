import {ElementRef} from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

export function lookForIllegalNodes(element: ElementRef, allowedTypes: string[] = []): void {
  const childNodes: HTMLCollection = element.nativeElement.children;
  if (!childNodes) {
    return;
  }

  const illegalNodes = [].slice.call(childNodes).filter(node => {
    return !allowedTypes.some(type => (node as Node).nodeName.toLowerCase() === type.toLowerCase());
  });

  if (illegalNodes.length === 0) {
    return;
  }

  // tslint:disable-next-line: max-line-length
  const errorMessage = `Error! Only following types are supported: ${allowedTypes.length > 0 ? allowedTypes.join(' ') : 'Text'}, found: ${illegalNodes.join(' ')}`;
  throw new Error(errorMessage);
}

export function select<T, R>(selector: (state: T) => R): OperatorFunction<T, R> {
  return (source$: Observable<T>): Observable<R> => {
    return source$.pipe(
      map(value => {
        try {
          return selector(value);
        } catch (err) {
          return undefined;
        }
      }),
      distinctUntilChanged()
    );
  };
}
