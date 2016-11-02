import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
//import * as $ from 'jquery';

@Directive({
    selector: '[clickOutsideForDate]'
})
export class ClickOutsideFroDateDirective {
    constructor(private _elementRef: ElementRef) {
    }
    
    @Output()
    public clickOutsideForDate = new EventEmitter<MouseEvent>();
    
    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: any, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        
        //const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        const clickedInside =this.eventTriggeredInsideHost(event);
        //console.log(clickedInside)
        //console.log($('#sss').find(event.target))
        //console.log(event.target)
        //console.log(this.eventTriggeredInsideHost(event))
    
    //&& $(event.target).closest("#open").length == 0
        //console.log($(event.target).parent());
        //console.log(this.eventTriggeredInsideHost2($(event.target)))
        // if($(event.target).closest("#menu").length == 0 ){
        //     //点击id为menu之外且id不是不是open，则触发
        //     //close();
        //     console.log('close')
        // }
        
        
        //console.log(/input|textarea|button/i.test(event.target.tagName))
        
        if (!clickedInside) {
            this.clickOutsideForDate.emit(event);
        }
    }
    
    eventTriggeredInsideHost2( current:any) {
        for (let i=0;i<100;i++){
            console.log(current);
            if(current[0].tagName.toUpperCase()=="TR") {
                console.log("parent",current.prevObject);
            }
            current = current.parent();
            if(!current[0]) return ;
            if(current[0].tagName.toUpperCase()=="HTML") return;
        }
        
        
        //var current = event.target;
        
        //console.log(current.innerHTML)
        // Reach under the hood to get the actual DOM element that is
        // being used to render the component.
        //var host = this._elementRef.nativeElement;
        // Here, we are going to walk up the DOM tree, checking to see
        // if we hit the "host" node. If we hit the host node at any
        // point, we know that the target must reside within the local
        // tree of the host.
        // do {
        //     // If we hit the host node, we know that the target resides
        //     // within the host component.
        //     console.log('current',current);
        //     // if (current === host) {
        //     //     return ( true );
        //     // }
        //     //current = current.parent();
        // } while (current);
        // If we made it this far, we never encountered the host
        // component as we walked up the DOM tree. As such, we know that
        // the target resided outside of the host component.
        return ( false );
        
    }
    
     eventTriggeredInsideHost( event:any) {
         var current = event.target;
         //console.log(current.innerHTML)
         // Reach under the hood to get the actual DOM element that is
         // being used to render the component.
         var host = this._elementRef.nativeElement;
         // Here, we are going to walk up the DOM tree, checking to see
         // if we hit the "host" node. If we hit the host node at any
         // point, we know that the target must reside within the local
         // tree of the host.
         do {
             // If we hit the host node, we know that the target resides
             // within the host component.
             //console.log('current',current);
             //console.log('tagName',current.tagName);
             if(current.tagName=="HTML") return false;
             if (current === host) return true;
             current = current.parentNode;
         } while (current);
         // If we made it this far, we never encountered the host
         // component as we walked up the DOM tree. As such, we know that
         // the target resided outside of the host component.
         return true;
    
     }
}