// PERSONALIZE CONTENT HERE. Replace sample wording with your own.
const CONFIG = {
  recipient: "Samri",
  sender: "Oli",
  birthday: "2026-10-27T00:00:00",
  letter: `My sweetest Samri,

Happy birthday, my love. ❤️ If I could give you one gift that would last forever, it would be the chance to see yourself through my eyes: your beautiful heart, your smile, your strength, and the quiet ways you make my life better. You are not just someone I love; you are one of the most precious blessings God has placed in my life.

Sometimes I think about how we met while waiting for a bus in Dire Dawa. We could never have known that one ordinary moment would lead to our first date, our night walks, our laughter, our graduation, our journeys, and a story that means so much to me. I would choose that beginning again and again.

We are not perfect, and our journey has not always been easy. Distance can be hard, and some days may test us, but I never want you to forget this: I am grateful for you, proud of you, and still excited about all the memories we have not made yet. I want to keep learning how to love you better, listening to you more carefully, praying for you, cheering for your dreams, and standing beside you through every season.

My prayer is that God protects your heart, gives you health and peace, blesses the work of your hands, opens the right doors for you, and fills your life with people and moments that remind you how deeply you are loved. May He guide our steps and help us build a future filled with faith, patience, laughter, and kindness.

Thank you for being you, Samri. You make ordinary days precious, and you are beautiful to me in more ways than words can explain. Today, I hope you feel celebrated—not only because it is your birthday, but because your life itself is a gift. I love you so much, my birthday girl.

Always choosing you,
Your Oli ❤️`,
  finalMessage: "Today is your day, and I pray God fills this new year of your life with peace, protection, good health, success, and a thousand reasons to smile. May He guide your steps, bless your dreams, and keep love and faith close to your heart. You are a precious blessing to me, Samri, and I thank God for bringing you into my life.",
  reasons: [
    "You make me smile even when my day is difficult.",
    "I love how we can laugh about the smallest things.",
    "You make ordinary moments feel important.",
    "With you, a simple walk can become a beautiful memory.",
    "You remind me that love is about choosing each other.",
    "I can be myself with you.",
    "You make distance feel worth fighting through.",
    "I admire the person you are and the person you are becoming.",
    "You bring warmth into my life in your own way.",
    "Even when we are not perfect, what we share matters deeply to me."
  ],
  memories: [
    {title:"Our First Date", place:"Dire Dawa", text:"I still smile thinking about that first date. It was the start of so many little moments that became a big part of my heart.", photo:"photos/memory1.jpg", caption:"A simple day, a beautiful beginning. ❤️"},
    {title:"The Day We Met", place:"Dire Dawa", text:"We were waiting for a bus, not knowing that an ordinary moment would become one of the most important chapters of our story.", photo:"photos/memory2.png", caption:"I would choose that day again, every time. 💌"},
    {title:"Our Night Walks", place:"Dire Dawa University", text:"Those walks at night are still some of my favorite memories. It never mattered where we were going; I just loved being beside you.", photo:"photos/memory3.jpg", caption:"My favorite direction has always been wherever you are. 🌙"},
    {title:"Harer", place:"Harer", text:"A place that became even more beautiful because I got to experience it with you. The best places are the ones that hold our memories.", photo:"photos/memory4.png", caption:"The view was lovely, but you were my favorite part. 🌿"},
    {title:"We Graduated Together", place:"Graduation day", text:"A proud day, made even more special because we shared it. I am proud of you and grateful for the journey we have taken together.", photo:"photos/memory5.png", caption:"Two dreams, one proud memory. 🎓"},
    {title:"Debre Zeit", place:"Debre Zeit", text:"A place holding a special moment for us, full of hope, love, and the future we dream of building side by side.", photo:"photos/memory6.png", caption:"Some moments become part of forever. 💍"},
    {title:"Together Everywhere — At Church", place:"Church", text:"In every place and every season, I am thankful for the moments we share. May we keep growing in love, kindness, and faith.", photo:"photos/memory7.png", caption:"Wherever life takes us, I am thankful we share the journey. 🙏"}
  ],
  wishes: ["May your heart always find peace.","May your health and happiness grow every year.","May your hard work open beautiful doors.","May you keep finding reasons to laugh.","May your dreams become plans, then memories.","May you always feel loved, supported, and appreciated."],
  amharicWishes: ["እግዚአብሔር ሁልጊዜ ይጠብቅሽ፣ ሰላምና ደስታንም ይስጥሽ።","የልብሽ ምኞቶች በመልካም ጊዜ ይፈጸሙ።","ጤና፣ ፍቅር፣ ስኬትና ብዙ ፈገግታ ይሙላ ሕይወትሽ።","ፍቅሬ ሳምሪ፣ ሁሌም ተወዳጅና የተባረክሽ ሁኚ።","እግዚአብሔር መንገድሽን ይምራ፣ ህልሞችሽንም ያሳካ።"]
};

const $ = id => document.getElementById(id);
const openGift = $("openGift");
openGift.addEventListener("click", () => {
  openGift.textContent = "A little magic for you ✨";
  openGift.disabled = true;
  confetti();
  setTimeout(() => {
    $("welcome").classList.add("hidden");
    $("birthday").classList.remove("hidden");
    $("birthday").scrollIntoView({behavior:"smooth",block:"start"});
    openGift.disabled = false;
  }, 650);
});
$("discover").addEventListener("click", () => { $("surprises").classList.remove("hidden"); $("surprises").scrollIntoView({behavior:"smooth"}); });
const target = new Date(CONFIG.birthday).getTime();
function tick() {
  let diff = target - Date.now();
  if (diff <= 0) {
    $("countdown").innerHTML = "<div style='min-width:220px'><strong>It's your day! 🎂</strong><span>Happy Birthday, " + CONFIG.recipient + "!</span></div>";
    return;
  }
  $("days").textContent = Math.floor(diff/86400000);
  $("hours").textContent = Math.floor(diff%86400000/3600000);
  $("minutes").textContent = Math.floor(diff%3600000/60000);
  $("seconds").textContent = Math.floor(diff%60000/1000);
}
tick(); setInterval(tick,1000);

// Falling mini-gifts appear while Samri's uploaded birthday song plays.
let giftRainTimer=null;
function startGiftRain(){
 const layer=$("giftRain"); if(!layer || giftRainTimer) return;
 const gifts=["🍬","🍫","🍰","🎁","🥂","🍭","💝","🧁"];
 giftRainTimer=setInterval(()=>{const el=document.createElement("span");el.className="falling-gift";el.textContent=gifts[Math.floor(Math.random()*gifts.length)];el.style.left=Math.random()*100+"vw";el.style.fontSize=(18+Math.random()*20)+"px";el.style.animationDuration=(4+Math.random()*4)+"s";el.style.setProperty("--drift",(Math.random()*140-70)+"px");layer.appendChild(el);setTimeout(()=>el.remove(),8500);},260);
}
function stopGiftRain(){if(giftRainTimer){clearInterval(giftRainTimer);giftRainTimer=null;}}
// Play the birthday song uploaded by Oli.
const songButton = $("songToggle");
const birthdaySong = $("birthdaySong");
if (songButton && birthdaySong) {
  songButton.addEventListener("click", async () => {
    try {
      if (birthdaySong.paused) {
        await birthdaySong.play();
        startGiftRain();
        songButton.textContent = "⏸ Pause birthday song";
      } else {
        birthdaySong.pause();
        stopGiftRain();
        songButton.textContent = "🎵 Play Samri’s Birthday Song";
      }
    } catch (err) {
      alert("Please tap the song button again. If it still does not play, check your device's media volume.");
    }
  });
  birthdaySong.addEventListener("ended", () => { stopGiftRain(); songButton.textContent = "🎵 Play Samri’s Birthday Song"; });
}
$("closeModal").addEventListener("click", () => $("modal").classList.add("hidden"));
$("modal").addEventListener("click", e => { if (e.target === $("modal")) $("modal").classList.add("hidden"); });
document.querySelectorAll("[data-modal]").forEach(btn => btn.addEventListener("click", () => showModal(btn.dataset.modal)));

function showModal(type) {
  let title="", body="";
  if(type==="letter") {
    title="A Letter From the Heart";
    body=`<p style="white-space:pre-line">${escapeHtml(CONFIG.letter)}</p>`;
  } else if(type==="memories") {
    title="Our Beautiful Memories";
    body=`<div class="memory-grid">${CONFIG.memories.map(m=>`<article class="memory postcard"><img src="${m.photo}" alt="${escapeHtml(m.title)}"><b>${escapeHtml(m.title)}</b><small>${escapeHtml(m.place)}</small><p>${escapeHtml(m.text)}</p><blockquote>${escapeHtml(m.caption)}</blockquote></article>`).join("")}</div><article class="memory-video"><h3>🎞️ Our Little Memories in Dire Dawa</h3><video controls playsinline preload="metadata" src="photos/dire-dawa-memory.mp4"></video><p>Dire Dawa will always mean something special to me, because some of my happiest memories begin with you. Wherever we go, it is the moments we share that make a place unforgettable. ❤️</p></article>`;
  } else if(type==="reasons") {
    title="Reasons You Are Special";
    body=CONFIG.reasons.map((r,i)=>`<article class="reason reason-postcard"><img src="photos/samri${(i%7)+1}.jpg" alt="Samri, reason ${i+1}"><details><summary>💗 Reason ${i+1}</summary><p>${escapeHtml(r)}</p><blockquote>“There are a thousand reasons to love you, and I keep finding more.” — Oli ♡</blockquote></details></article>`).join("");
  } else if(type==="wishes") {
    title="Birthday Wishes";
    body=`<p>My birthday girl, tap the candle below, close your eyes, and make a wish from your heart. May God hear the good things you hope for. 🙏</p><div class="wish-cake-wrap"><button class="wish-candle" id="wishCandle" aria-label="Tap the candle to make a birthday wish"><span class="wish-flame">🔥</span><span class="wish-wick"></span></button><div class="wish-cake">🎂</div></div><p id="wishHint">Touch the candle to make your birthday wish ✨</p><button class="primary" id="wishButton">I Made My Wish 💖</button><p id="wishResult" aria-live="polite"></p><h3>💗 My wishes for you</h3>${CONFIG.wishes.map((w,i)=>`<p>${["🕊️","🌷","✨","🌈","🌠","💗"][i]} ${escapeHtml(w)}</p>`).join("")}<h3>🇪🇹 የልደት ምኞቶች</h3>${CONFIG.amharicWishes.map(w=>`<p class="amharic-wish">${escapeHtml(w)}</p>`).join("")}`;
  } else if(type==="secret") {
    title="A Little Secret";
    body=`<span class="secret-star" id="secretStar">🌟</span><p style="text-align:center">Tap the glowing star to reveal a little secret.</p><p class="hidden" id="secretText">Samri, I hope I get to celebrate you, laugh with you, and make new memories with you for many birthdays to come. You are part of my favorite memories and part of the future I dream about. ❤️</p>`;
  } else {
    title=`One Last Thing, ${CONFIG.recipient}`;
    body=`<div style="text-align:center;font-size:3rem">🎆 💖 🎆</div><div class="final-gift-grid"><div class="final-gift-card">🍬<small>Sweet candy</small></div><div class="final-gift-card">🍫<small>Chocolate for you</small></div><div class="final-gift-card">🎂<small>Your birthday cake</small></div><div class="final-gift-card">🧁<small>Little cupcakes</small></div><div class="final-gift-card">🎁<small>A wrapped surprise</small></div><div class="final-gift-card">🥂<small>A sparkling toast</small></div></div><p style="font-size:1.1rem;text-align:center">${escapeHtml(CONFIG.finalMessage)}</p><p style="text-align:center;color:var(--pink);font-weight:bold">I love you, ${escapeHtml(CONFIG.recipient)}. Happy birthday. ❤️</p><h3 style="text-align:center">With prayer and love — ከፍቅርና ከጸሎት</h3>${CONFIG.amharicWishes.map(w=>`<p class="amharic-wish">${escapeHtml(w)}</p>`).join("")}<button class="primary" id="restart">Experience the Surprise Again ↻</button>`;
  }
  const samriPortrait = `photos/samri${(Math.floor(Math.random()*7)+1)}.jpg`;
  $("modalContent").innerHTML=`<div class="modal-body"><div class="modal-samri-postcard"><img src="${samriPortrait}" alt="Samri, loved by Oli"><span>for my beautiful Samri ♡</span></div><h2>${title}</h2>${body}</div>`;
  $("modal").classList.remove("hidden");
  if(type==="wishes") {
    let candleTouched = false;
    $("wishCandle").addEventListener("click", () => {
      candleTouched = true;
      $("wishCandle").classList.add("blown-out");
      $("wishHint").textContent = "✨ Your candle is glowing in your heart. Keep that wish close. ✨";
      confetti();
    });
    $("wishButton").addEventListener("click",()=>{
      if (!candleTouched) { $("wishResult").textContent="First, touch the candle and make your wish, my love. 💗"; return; }
      $("wishResult").textContent="🙏 Amen. May God bless your wish with what is good for you, Samri. እግዚአብሔር ምኞትሽን በበጎ ነገር ይመልስልሽ። ❤️";
      confetti();
    });
  }
  if(type==="secret") $("secretStar").addEventListener("click",()=>{$("secretText").classList.remove("hidden");$("secretStar").textContent="💌";confetti();});
  if(type==="final") $("restart").addEventListener("click",()=>{ $("modal").classList.add("hidden"); $("surprises").classList.add("hidden");$("birthday").classList.add("hidden");$("welcome").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});});
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function confetti() {
  const emojis=["💗","✨","🎉","💕","⭐"];
  for(let i=0;i<28;i++){
    const el=document.createElement("span");el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    Object.assign(el.style,{position:"fixed",left:Math.random()*100+"vw",top:"-35px",fontSize:(16+Math.random()*16)+"px",zIndex:9999,pointerEvents:"none",transition:"transform 2.1s ease-in,opacity 2.1s ease-in"});
    document.body.appendChild(el);
    requestAnimationFrame(()=>{el.style.transform=`translate(${(Math.random()-.5)*160}px, ${window.innerHeight+80}px) rotate(${Math.random()*600}deg)`;el.style.opacity="0";});
    setTimeout(()=>el.remove(),2300);
  }
}
