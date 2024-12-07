export default function PagenationDown(page){
    if(page==0){
        return 0;
    }
    else{
        return page-1;
    }
}