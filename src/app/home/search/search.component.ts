import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ccab-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, OnDestroy {

    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';

    debounce: Subject<string> = new Subject<string>();

    ngOnInit() {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter));
    }
    ngOnDestroy() {
        this.debounce.unsubscribe();
    }
}