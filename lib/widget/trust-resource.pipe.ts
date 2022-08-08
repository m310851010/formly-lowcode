import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * 非安全加载HTML
 */
@Pipe({
  name: 'trustHtml'
})
export class EdtTrustHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(html: string, enabled = true): any {
    return enabled ? this.sanitizer.bypassSecurityTrustHtml(html) : html;
  }
}
