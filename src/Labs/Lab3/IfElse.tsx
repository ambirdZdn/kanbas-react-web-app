export default function IfElse() {
    let true1 = true, false1 = false;
    const content = null;
    
    return(
        <div id="wd-if-else">
            <h4>If Else</h4>
            { true1 && <p>true1</p> }
            { !false1 ? <p>!false1</p> : <p>false1</p> }
            {content || <p>Using"||", rendered if flases</p>}
            {!true || <p>!true</p>} 
            <hr/>
        </div> 
    )
}