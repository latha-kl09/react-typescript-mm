import { ComponentPropsWithoutRef } from "react";

type ButtonProps=ComponentPropsWithoutRef<'button'> &{ 
href? : never;
};

type AnchorProps=ComponentPropsWithoutRef<'a'> & {
href?: string;
};

function IsAnchorProps (props:ButtonProps|AnchorProps):props is AnchorProps{
    return 'href' in props;
}


export default function Button(props: ButtonProps|AnchorProps){
   
    if(IsAnchorProps(props)){
        return <a className="button" {...props}></a>
    }
    return<button className="button"{...props}></button>
    
}