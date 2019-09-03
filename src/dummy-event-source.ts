import { FlexibleEventSource, FlexibleExtractor, FlexibleFilter, FlexibleEvent, Type } from "flexible-core";
import { AsyncContainerModule } from "inversify";

export class DummyEventSource implements FlexibleEventSource {
    readonly container: AsyncContainerModule;
    readonly availableExtractors: Type<FlexibleExtractor>[] = [];
    readonly availableFilters: Type<FlexibleFilter>[] = [];
    
    private eventHandler: (event: FlexibleEvent) => any; 
    public running: boolean;

    public constructor() {
        
    }

    public async run(): Promise<boolean> {
        return this.running = true
    }

    public async stop(): Promise<boolean> {
        return this.running = false;
    }

    public onEvent(handler: (event: FlexibleEvent) => Promise<any>): void {
        this.eventHandler = handler;
    }

    public generateEvent(event: FlexibleEvent): Promise<any>{
        if(this.running){
            return this.eventHandler(event);
        }
        else{
            throw "Server not running";
        }
    }
}