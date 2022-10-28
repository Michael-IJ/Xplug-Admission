function checker() {
  // let candResult = document.getElementById("result")
  let candName1 = document.getElementById("candName").value;
  let candMail = document.getElementById("candMail").value;
  let candOlevel = document.getElementById("candOlevel").value;
  let candUtme1 = document.getElementById("candUtme").value;
  let candPutme1 = document.getElementById("candPutme").value;
  let candSitting = document.getElementById("oneSitting").value;
  let candState = document.getElementById("stateOfOrigin").value;
  let result = document.getElementById("display_result");

  //turning it numbers

  let myOlevel = Number(candOlevel);
  let myUtme = Number(candUtme1);
  let myPutme = Number(candPutme1);
  let myState = candState;

  let myUtme1 = myUtme / 8;

  let oLevel = [myOlevel];

  let oneSittings = Number(candSitting);

  let toggleState = false;

  let states = ["lagos", "ekitti", "oshun", "ogun", "niger", "south"];

  const candLevelScore = oLevel.reduce((a, b) => {
    return a + b;
  });

  let totalScore = Math.round((candLevelScore / 50) * 30) + myUtme1 + myPutme;

  states.forEach((states) => {
    if (myState.includes(states)) {
      toggleState = true;
    }
  });
  //the verfication
  this.verify = () => {
    // if (myUtme1  < 180) {
    console.log(totalScore);
    //   return candResult.innerHTML="you've been disqualified!";
    if (candName1.length === 0|| candMail.length === 0) {
      return (result.innerHTML = "ERROR...Fill In All Details");
    } else if (totalScore >= 70 && totalScore <= 75) {
      return (result.innerHTML = " Qualified for MERIT SCORE!!!");
    } else if (totalScore >= 60 && totalScore < 64) {
      return (result.innerHTML = "Qualified for CONCESSIONARY!!!");
    } else if ((totalScore > 55 && totalScore < 60) || toggleState === true) {
      return (result.innerHTML = "Qualified for CATCHMENT!!!");
    } else if (totalScore > 51 && totalScore < 55) {
      return (result.innerHTML = " Qualified for VC'S!!!");
    } else if (oneSittings > 3) {
      return (result.innerHTML = "You have been disqualified");
    } else {
      return (result.innerHTML = "you are disqualified");
    }
  };
}

document.getElementById("check_addimision").addEventListener("click", () => {
  const candy = new checker();
  candy.verify();
  let   zuma = document.querySelector('#display_result');
    zuma.classList.remove('hide');
    document.querySelector('#before').classList.remove('hide');
    document.querySelector('#restart').classList.remove('hide');
    zuma.style.display = "flex";
})
