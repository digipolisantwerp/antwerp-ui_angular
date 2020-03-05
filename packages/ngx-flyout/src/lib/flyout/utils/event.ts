/* tslint:disable */
export const isEvent = (e: KeyboardEvent, code: string, keyCode?: number): boolean => {
  const isCode = !!e.code && e.code.toLowerCase() === code;
  const isKeyCode = keyCode !== undefined ? e.keyCode === keyCode || e.which === keyCode : true;

  return isCode && isKeyCode;
};
