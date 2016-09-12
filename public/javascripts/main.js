var stabX=1.25;
var buildBleed="unstabbed"
var conBleed="unstabbed"
var buildDmg=0;
var conDmg=0;

// Stab application~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('#buildSTAB').click(function(){
  if(buildBleed==="stabbed"){
    buildBleed="unstabbed";
  }
  else if(buildBleed==="unstabbed"){
    buildBleed="stabbed";
  }
})

$('#conSTAB').click(function(){
  if(conBleed==="stabbed"){
    conBleed="unstabbed";
  }
  else if(conBleed==="unstabbed"){
    conBleed="stabbed";
  }
})

function stabCheck(){
  if(buildBleed==="stabbed"){
    buildDmg=1.25*($('#buildDmg').val()-0)
  }
  else{
    buildDmg=($('#buildDmg').val()-0)
  }
  if(conBleed==="stabbed"){
    conDmg=1.25*($('#conDmg').val()-0)
  }
  else{
    conDmg=($('#conDmg').val()-0)
  }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$('button').click(function(){
  stabCheck();
  console.log($('#buildSTAB').val())
  // vanilla DPS
  $('#bDPS').text((buildDmg/($('#buildDur').val()-0)).toFixed(1));
  $('#cDPS').text((conDmg/($('#conDur').val()-0)).toFixed(1));
  // vanilla EPS
  $('#bEPS').text((($('#buildEng').val()-0)/($('#buildDur').val()-0)).toFixed(1));
  $('#cEPS').text((($('#conEng').val()-0)/($('#conDur').val()-0)).toFixed(1));
  // vanilla DPE
  $('#cDPE').text((conDmg/($('#conEng').val()-0)).toFixed(1));
})
