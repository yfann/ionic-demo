import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'inline-edit',
    templateUrl: 'inline-edit.html',
    styleUrls: ['inline-edit.scss'],
})
export class InlineEdit {
    private isDisplay = true;

    @Input() text: string='';
    @Output() edit = new EventEmitter<string>();

    beginEdit(el: HTMLElement): void {
        this.isDisplay = false;

        setTimeout(() => {
            el.focus();
        }, 100);
    }

    editDone(newText: string): void {
        this.isDisplay = true;
        this.text = newText;
        this.edit.emit(this.text);
    }
}