

export interface HTMLInputEvent extends Event {
    target:HTMLInputElement & EventTarget;
} 

export interface RuleProps{
    type:'required' | 'email' | 'custom'
    message:string
    validator?:()=>boolean

}