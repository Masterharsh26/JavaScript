
function timing(){
const timer = document.getElementById('root');

const dat1=new Date();
const dat2=new Date("2028-07-21T00:00:00");
const dateee=dat2-dat1; 

const days=Math.floor(dateee/(1000*60*60*24));
const hour = Math.floor((dateee/(1000*60*60))%24);
const min = Math.floor((dateee/(1000*60))%60);
const sec = Math.floor((dateee/(1000))%60);

const IndianTime = `
        <div style="text-align: center;">
            <div style="font-size: 200px;">${days}</div>
            <div style="display: flex; justify-content: center; gap: 40px; font-size: 30px;">
                <div>${hour.toString().padStart(2, '0')}<br><small>hours</small></div>
                <div>${min.toString().padStart(2, '0')}<br><small>minutes</small></div>
                <div>${sec.toString().padStart(2, '0')}<br><small>seconds</small></div>
            </div>
        </div>





`;
timer.innerHTML=IndianTime;
}
setInterval (timing,1000);



                    
