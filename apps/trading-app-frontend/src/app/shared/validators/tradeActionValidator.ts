import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function tradeActionValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return ['buy', 'sell'].findIndex((candidate) => candidate === value.toLocaleString()) === -1 ? { notAValidTradeAction: true } : null;
  };
}
