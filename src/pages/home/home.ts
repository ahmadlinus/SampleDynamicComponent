import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SampleComponent } from '../../components/sample/sample';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('placeholder', {read: ViewContainerRef}) container;

  constructor(public navCtrl: NavController, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
      // create component factory
      let factory = this.resolver.resolveComponentFactory(SampleComponent);

      // embed/render the newly created component inside the container
      const UIComponent = factory.create(this.container.parentInjector);

      this.container.insert(UIComponent.hostView);

      // setting the input(s) of the component
      UIComponent.instance.parameter = "This is a sample parameter";

  }

}
