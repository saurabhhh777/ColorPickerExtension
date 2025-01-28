const btn = document.querySelector("button");

function btncall(){
    btn.addEventListener("click", async ()=>{
        const resultc = document.querySelector(".result-color");
        
        if (!window.EyeDropper) {
            resultc.textContent =
              "Your browser does not support the EyeDropper API";
            return;
        }
        
        const eyeDropper = new EyeDropper();
        
        try{
            const res = await eyeDropper.open();
            resultc.textContent = res.sRGBHex;
            resultc.style.backgroundColor = res.sRGBHex;

            await navigator.clipboard.writeText(res.sRGBHex);
      

        }
        catch(err){
           console.log(err);
        }
    });
}

btncall();