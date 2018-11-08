import { Component, forwardRef } from '@angular/core';

import { EmojiProvider } from "../../providers/emoji";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const EMOJI_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmojiPickerComponent),
  multi: true
};

/**
 * Generated class for the EmojiPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'emoji-picker',
  templateUrl: 'emoji-picker.html',
  //styleUrls: ['./emoji-Picker.scss'],
  providers: [EMOJI_PICKER_VALUE_ACCESSOR]
})
export class EmojiPickerComponent implements ControlValueAccessor{

  emojiArr = [];

  _content: string;
  _onChanged: Function;
  _onTouched: Function;

  constructor(emojiProvider: EmojiProvider) {
    this.emojiArr = emojiProvider.getEmojis();
  }

  writeValue(obj: any): void {
    this._content = obj;
  }

  registerOnChange(fn: any): void {
    this._onChanged = fn;
    this.setValue(this._content);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  private setValue(val: any): any {
    this._content += val;
    if (this._content) {
      this._onChanged(this._content)
    }
  }

}
