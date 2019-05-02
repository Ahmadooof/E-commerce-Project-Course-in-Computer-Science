import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(array: any[], prop: string, value: string): any[] {
        if (array) { // If it is an array =>
            if (!value) { // If no value in that slot =>
                return array // Return current array.
            } else { // Otherwise return the array filtered by:
                // Object[prop], value.
                return array.filter(object => this.filter(object[prop], value))
            }
            
        } else {
            return [] // If not an array return an empy array (eliminates error).
        }
    }
    /* FILTER:
     * It takes the source and checks if it is included within the desired target.
     * Example: I type "Al" it will check it and say it resembles "Alabama" & "Alaska".
     * Here source is "Al" and target is "Alabama" &&|| "Alaska".
    **/
    filter(source: string, target: string): boolean {
        return source.includes(target)
    }
}
