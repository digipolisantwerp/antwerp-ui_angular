import { Component, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'aui-icon',
  templateUrl: './icon.component.html',
  styles: [':host { display: inline-flex; }'],
})
export class IconComponent implements OnInit {
  @HostBinding('attr.class') get classes(): string {
    return [
      'ai',
      this.className,
      this.href,
    ].filter(Boolean).join(' ');
  }

  @Input() public name: string;
  @Input() public ariaLabel: string;
  @Input() public className = '';

  public href: string;
  private isFetching = false;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    if (!document.getElementById('aiSvg') && !this.isFetching) {
      this.isFetching = true;
      this.fetchAntwerpIcons();
    }

    this.href = this.name ? (this.name.match(/^ai-/) ? this.name : `ai-${this.name}`) : '';
  }

  private fetchAntwerpIcons = async () => {
    try {
      const xlinkHref = 'https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.7/assets/images/ai.svg';
      const response = await fetch(xlinkHref);
      const svgText = await response.text();
      const svgWrapper = this.renderer.createElement('svg');
      this.renderer.setAttribute(svgWrapper, 'id', 'aiSvg');
      const svgIcons = new DOMParser().parseFromString(svgText, 'text/html').querySelector('body > svg');
      this.renderer.appendChild(svgWrapper, svgIcons);

      if (!document.getElementById('aiSvg')) {
        this.renderer.appendChild(document.body, svgWrapper);
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      this.isFetching = false;
    }
  }

}
