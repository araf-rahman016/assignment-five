// Increase Heart Count >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // National Emergency Number
    document.getElementById('national_heart').addEventListener("click", function(){
          // console.log("Done")
    
          // Change The heart Color>>>
      document.getElementById("national_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
          // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Police Helpline Number
    document.getElementById('police_heart').addEventListener("click", function(){
          // console.log("Done")
    
          // Change The heart Color>>>
      document.getElementById("police_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
          // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Fire Service Number
    document.getElementById('fire_heart').addEventListener("click", function(){
      // console.log("Done")
    
      // Change The heart Color>>>
      document.getElementById("fire_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
      // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Ambulance Service
    document.getElementById('ambulance_heart').addEventListener("click", function(){
      // console.log("Done")
    
      // Change The heart Color>>>
      document.getElementById("ambulance_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
      // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Women And Child Helpline
    document.getElementById('women_and_child_heart').addEventListener("click", function(){
      // console.log("Done")
    
      // Change The heart Color>>>
      document.getElementById("women_and_child_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
      // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Anti-Corruption Helpline
    document.getElementById('curruption_heart').addEventListener("click", function(){
      // console.log("Done")
    
      // Change The heart Color>>>
      document.getElementById("curruption_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
      // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Electricity 
    document.getElementById('electricity_heart').addEventListener("click", function(){
      // console.log("Done")
    
      // Change The heart Color>>>
      document.getElementById("electricity_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
      // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Brac Helpline
    document.getElementById('brac_heart').addEventListener("click", function(){
      // console.log("Done")
    
      // Change The heart Color>>>
      document.getElementById("brac_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
      // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })
    // Bangladesh Railway Helpline
    document.getElementById('railway_heart').addEventListener("click", function(){
      // console.log("Done")
    
      // Change The heart Color>>>
      document.getElementById("railway_heart").classList.add("text-red-500")
    
      const heart = document.getElementById('heart');
      const heartInnerText = parseInt(heart.innerText);
      const newHeartValue = heartInnerText + 1 ;
      // console.log(newHeartValue)
      document.getElementById('heart').innerText = newHeartValue
    })

// Call Alert Section >>>>>>>>>>>>>>>>>>>>>>>>>>>

// National Emergency Number

document.getElementById('national_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling National Emergency Service 999...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("national_subTitle").innerText
  const number = document.getElementById("national_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Police Helpline Number

document.getElementById('police_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Police 999...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("police_subTitle").innerText
  const number = document.getElementById("police_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Fire Service 

document.getElementById('fire_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Fire Service 999...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("fire_subTitle").innerText
  const number = document.getElementById("fire_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Ambulance Service

document.getElementById('ambulance_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Ambulance 1994-999999...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("ambulance_subTitle").innerText
  const number = document.getElementById("ambulance_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Women & Child Helpline

document.getElementById('women_and_child_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Women & Child Helpline 109...")

    // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("women_and_child_subTitle").innerText
  const number = document.getElementById("women_and_child_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Anti-Corruption Helpline

document.getElementById('curruption_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Anti-Corruption 106...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("curruption_subTitle").innerText
  const number = document.getElementById("curruption_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Electricity Helpline

document.getElementById('electricity_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Electricity Outage 16216...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("electricity_subTitle").innerText
  const number = document.getElementById("electricity_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Brac Helpline

document.getElementById('brac_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
   if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Brac 16445...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("btac_subTitle").innerText
  const number = document.getElementById("brac_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Bangladesh Railway Helpline

document.getElementById('railway_btn').addEventListener("click", function(){
  // console.log("done")
  const coin = document.getElementById('coin')
  const coinInnerText = parseInt(coin.innerText)
  const newCoinValue = coinInnerText - 20;
  // console.log(newCoinValue)
  if(coinInnerText === 0){
    lowCoin = alert("❌ You don’t have enough coins to make the call. At least 20 coins are required.")
    return lowCoin;
  }
  document.getElementById('coin').innerText = newCoinValue;
  alert ("📞 Calling Bangladesh Railway 163...")

  // For Call History>>>>>> Start Here

  const subTitle = document.getElementById("railway_subTitle").innerText
  const number = document.getElementById("railway_num").innerText; 
  const callHistory = document.getElementById("call_history");
  // Get Local Time
  const now = new Date();
  const time = now.toLocaleTimeString();

  // History div - Add
  callHistory.innerHTML += `
      <div class="flex justify-between items-center mb-[8px] bg-[#3333331a] p-[12px] rounded-xl">
          <div>
              <h3 class="text-[15px] font-semibold">${subTitle}</h3>
              <p class="text-[15px] text-[#5c5c5c] font-bold">${number}</p>
          </div>
          <div>
              <p class="text-[12px] font-bold">${time}</p>
          </div>
      </div>
  `;
  // End Here>>>>>>
})

// Increase Copy Count >>>>>>>>>>>>>>>>>>>>>>>>>>

// National Emergency Number

document.getElementById('national_copy').addEventListener("click", function(){
  // console.log("Done")
   //  copy element
  const nationalNumber = document.getElementById('national_num').innerText;
  navigator.clipboard.writeText(nationalNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 999")
})

// Police Helpline Number

document.getElementById('police_copy').addEventListener("click", function(){
  // console.log("Done")
   //  copy element
  const policeNumber = document.getElementById('fire_num').innerText;
  navigator.clipboard.writeText(policeNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 999")
})

// Fire Service Number

document.getElementById('fire_copy').addEventListener("click", function(){
  // console.log("Done")
   //  copy element
  const fireNumber = document.getElementById('fire_num').innerText;
  navigator.clipboard.writeText(fireNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 999")
})

// Ambulance Service

document.getElementById('ambulance_copy').addEventListener("click", function(){
  // console.log("Done")
   //  copy element
  const ambulanceNumber = document.getElementById('ambulance_num').innerText;
  navigator.clipboard.writeText(ambulanceNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 1994-999999")
})

// Women & Child Helpline

document.getElementById('women_and_child_copy').addEventListener("click", function(){
  // console.log("Done")
   //  copy element
  const womanAndChildNumber = document.getElementById('women_and_child_num').innerText;
  navigator.clipboard.writeText(womanAndChildNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 109")
})

// Anti-Corruption Helpline

document.getElementById('curruption_copy').addEventListener("click", function(){
  // console.log("Done")
   //  copy element
  const curruptionNumber = document.getElementById('curruption_num').innerText;
  navigator.clipboard.writeText(curruptionNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 106")
})

// Electricity Helpline

document.getElementById('electricity_copy').addEventListener("click", function(){
  // console.log("Done")
   //  copy element
  const electricityNumber = document.getElementById('electricity_num').innerText;
  navigator.clipboard.writeText(electricityNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 16216")
})

// Brac Helpline

document.getElementById('brac_copy').addEventListener("click", function(){
  // console.log("Done")
  //  copy element
  const bracNumber = document.getElementById('brac_num').innerText;
  navigator.clipboard.writeText(bracNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 16445")
})

// Bangladesh Railway Helpline

document.getElementById('railway_copy').addEventListener("click", function(){
  // console.log("Done")
    //  copy element
  const railwayNumber = document.getElementById('railway_num').innerText;
  navigator.clipboard.writeText(railwayNumber);

  const copy = document.getElementById('copy');
  const copyInnerText = parseInt(copy.innerText);
  const newCopyValue = copyInnerText + 1 ;
  // console.log(newHeartValue)
  document.getElementById('copy').innerText = newCopyValue
  alert("Number has been copied: 163")
})

// Clear Call History >>>>>>>>>>>

document.getElementById('clear_button').addEventListener("click", function(){
  const historyInner = document.getElementById('call_history')
  historyInner.innerHTML=""
  alert("All call history has been cleared")
  const navCoin = parseInt(document.getElementById("coin").innerText);
  if (navCoin ===0){
    zeroCoin = navCoin+20;
    document.getElementById("coin").innerText=zeroCoin
    alert("you have received 20 coin bonus for clearing the call history ")
  }

})
