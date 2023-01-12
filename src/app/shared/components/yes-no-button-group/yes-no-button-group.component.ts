import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  // This component has 2 different ways of accessing its data;
  // 1 way is by implementing the interface ControlValueAccessor;
  // 2 way is by using the decorators @Input and @Output and its values;
  // It's up to you to choose what you want to use in your project!

  @Input() public value: string = null;
  @Output() public valueChange = new EventEmitter();

  @Input() public label: '';
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public activate(value: 'yes' | 'no'): void {
    this.writeValue(value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
