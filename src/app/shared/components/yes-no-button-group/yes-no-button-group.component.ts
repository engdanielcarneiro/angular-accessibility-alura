import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Output() public valueChange = new EventEmitter();

  @Input() public label: '';
  public options = YesNoButtonGroupOptions;

  constructor() {}

  ngOnInit(): void {}

  public activate(value: 'yes' | 'no'): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
