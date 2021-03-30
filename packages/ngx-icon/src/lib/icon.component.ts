import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'aui-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
  @Input() public name: string;
  @Input() public ariaLabel: string;

  public href: string;
  private isFetching = false;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if(!document.getElementById('aiSvg') && !this.isFetching) {
      this.isFetching = true;
      this.fetchAntwerpIcons();
    }

    this.href = this.name ? (this.name.substring(0, 3) === 'ai-' ? this.name : `ai-${this.name}`) : '';
  }

  private fetchAntwerpIcons = async () => {
    try {
      const xlinkHref = 'https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.5/assets/images/ai.svg';
      const response = await fetch(xlinkHref);
      const svgText = await response.text();
      const svgWrapper = this.renderer.createElement('svg');
      this.renderer.setAttribute(svgWrapper, 'id', 'aiSvg');
      const svgIcons = new DOMParser().parseFromString(svgText, 'text/html').querySelector('body > svg');
      this.renderer.appendChild(svgWrapper, svgIcons);

      if(!document.getElementById('aiSvg')) {
        this.renderer.appendChild(document.body, svgWrapper);
      }
    } catch(err) {
      // Do nothing, just make sure it is executed again
    } finally {
      this.isFetching = false;
    }
  }

}
