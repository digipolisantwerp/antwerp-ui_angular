import {Inject, Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';

import {CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT} from '../context.conf';
import {ContextConfig} from '../types/context.types';

@Injectable()
export class ContextWriterService {
  constructor(
    @Inject(CONTEXT_CONFIG) private metaConfig: ContextConfig,
    @Inject(DOCUMENT) private document: any,
    private titleService: Title
  ) {
    this.metaConfig = {
      ...CONTEXT_CONFIG_DEFAULT,
      ...metaConfig,
    };
  }

  public updateMetaTags(meta: any = {}): void {
    if (meta.disableUpdate) {
      return;
    }

    const newConfig = {
      ...meta,
      ...this.metaConfig.defaults,
      title: this.getTitle(meta),
    };

    Object.keys(newConfig).forEach(key => {
      this.setTag(key, newConfig);
    });
  }

  public setTag(key: string, values: { [key: string]: string } = {}): void {
    switch (key) {
      case 'title':
      case 'titleSuffix':
        return this.setTitle(values.title, values.titleSuffix);
      case 'favIcon':
        return this.setFavIcon(values.favIcon);
      default:
        return this.setTagDefault(key, values[key]);
    }
  }

  private setTitle(title?: string, titleSuffix: string = this.metaConfig.defaults.titleSuffix): void {
    let titleStr = this.isDefined(title) ? title : this.metaConfig.defaults.title;

    if (this.metaConfig.useTitleSuffix && this.isDefined(titleSuffix)) {
      titleStr += titleSuffix;
    }

    this.titleService.setTitle(titleStr);
  }

  private setFavIcon(favIcon: string): void {
    this.updateFavIcon('apple-touch-icon', favIcon);
    this.updateFavIcon('shortcut icon', favIcon);
  }

  private updateFavIcon(rel: string, href: string, attrs?: { [key: string]: string }): void {
    const oldIcon: HTMLElement = this.document.querySelector(`link[rel="${rel}"]`);

    if (oldIcon && oldIcon.getAttribute('href') === href) {
      return;
    }

    const newIcon: HTMLElement = this.document.createElement('link');
    newIcon.setAttribute('rel', rel);
    newIcon.setAttribute('href', href);

    if (attrs) {
      Object.keys(attrs).forEach((key: string) => {
        newIcon.setAttribute(key, attrs[key]);
      });
    }

    if (oldIcon) {
      this.document.head.removeChild(oldIcon);
    }

    this.document.head.appendChild(newIcon);
  }

  private setTagDefault(tag: string, content: string): void {
    const tagElement = this.getOrCreateMetaTag(tag);
    const tagContent = this.isDefined(content) ? content : (this.metaConfig.defaults[tag] || '');

    tagElement.setAttribute('content', tagContent);

    if (tag === 'description') {
      const ogDescElement = this.getOrCreateMetaTag('og:description');
      ogDescElement.setAttribute('content', tagContent);
    }
  }

  private isDefined(value: any): boolean {
    return typeof value !== 'undefined';
  }

  private getOrCreateMetaTag(name: string): HTMLElement {
    let el: HTMLElement = this.document.querySelector(`meta[name='${name}']`);
    if (!el) {
      el = this.document.createElement('meta');
      el.setAttribute('name', name);
      this.document.head.appendChild(el);
    }
    return el;
  }

  private getTitle(meta: any = {}): string {
    const shouldExtend = this.metaConfig.extendTitle && meta.parent;

    return shouldExtend ? [meta.title, meta.parent].join(this.metaConfig.titleDelimiter) : meta.title;
  }
}
