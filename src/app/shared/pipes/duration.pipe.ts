import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    constructor() {}

    public transform(value: number): string {
        const date = new Date(value);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();

        return hours + ':' + minutes.substr(-2);
    }
}