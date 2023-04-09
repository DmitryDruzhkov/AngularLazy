import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { ComponentLoader } from '../interfaces';

@Directive({
  selector: '[DynamicComponent]',
  standalone: true,
})
export class DirectivesDynamicComponentDirective {
  @Input() set componentLoader(value: ComponentLoader | null) {
    if (value) {
      this.loadComponent(value);
    } else {
      this.viewContainerRef.clear();
    }
  }
  
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  private async loadComponent(componentLoader: ComponentLoader): Promise<void> {
    const component = await componentLoader();
    this.createDynamicComponent(component);
  }

  private createDynamicComponent(component: any): void {
    this.viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(component);

    const componentRef = this.viewContainerRef.createComponent(componentFactory);
  }
}
