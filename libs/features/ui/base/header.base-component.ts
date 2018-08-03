import { Component, Input, Output, EventEmitter } from '@angular/core';

// libs
import { BaseComponent } from '@nx-workspace/core/base';

export abstract class HeaderBaseComponent extends BaseComponent {
  @Input() title: string;
  @Input() rightButton: string;
  @Output() tappedRight: EventEmitter<boolean> = new EventEmitter();
}
