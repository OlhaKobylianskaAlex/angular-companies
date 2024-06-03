import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'color' })
export class ColorPipe implements PipeTransform {
  transform(value: string, search: string | null): string {
    if (!search) return value;

    const regex = new RegExp(`\\b(${search.split(' ').join('|')})\\b`, 'gi');
    return value.replace(regex, '<span class="accent">$1</span>');
  }
}
