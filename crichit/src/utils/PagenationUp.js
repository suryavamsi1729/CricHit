export default function PagenationUp(page,size,dataSize){
    if(((page+2)*size)>dataSize){
        if(((page+1)*size)<dataSize){
            return page+1;
        }
        else{
            return page;
        }
        
    }
    else{
        return(page+1);
    }
}