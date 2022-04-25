function eventListener(){
    let count = 0;
    document.getElementById('submit').addEventListener("click",function (){
        console.log("Button clicked", ++count);
    });
}
eventListener();


document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM is loaded');

//garbage collection (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program