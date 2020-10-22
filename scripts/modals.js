function ModalHandler(){
  this.fourtofivepopup = function(){
    if (events.fourtofiveconversion === true) {
      for (i=0; i<diceingame.number; i++){
        if (diceingame.randomnumber[i] === 4){
          diceingame.randomnumber[i] = 5
          $('#dice' + (i+1)).removeClass('spintoright')
          $('#dice' + (i+1)).addClass('spintobottom')
          break
        }
      }
      $('#fourtofivebutton').prop('disabled', true)
      for (i=0; i<dice.number; i++){
        if (diceingame.randomnumber[i] === 4){
          buttondisable2()
          break
        }
      }
    }else{
      $('#4sto5smainbody').empty()
      for (card in player.hand){
        $('#4sto5smainbody').append('<input type="checkbox" onclick = "countboxes()" id="' + conversationcards[player.hand[card]-1].title +  '" name="' + conversationcards[player.hand[card]-1].title + '"<label for="' + conversationcards[player.hand[card]-1].title + '">' + conversationcards[player.hand[card]-1].title + '</label><br>')
      }
      for (i=0; i<diceingame.number; i++){
        if (diceingame.randomnumber[i] === 4){
          $('#4to5modal').modal({'backdrop':false, 'keyboard':false})
          $('#discardbutton').prop('disabled', true)
          break
        }
      }
    }
  }
  this.discardfourtofive = function(){
    for (i = 0; i<2 ; i++){
      let titletodiscard = $(":checkbox:checked")[i]['name']
      console.log(titletodiscard)
      for (j=0; j<conversationcards.length; j++){
        if (conversationcards[j]['title'] === titletodiscard){
          let idtodiscard =  conversationcards[j]['id']
          for(k=0; k<player.hand.length; k++){
            if (player.hand[k] === idtodiscard){
              player.discard.push(idtodiscard)
              player.hand.splice(k,1)
            }
          }
        }
      }
    }
    for (i=0; i<diceingame.number; i++){
      if (diceresults[i] === 4){
        diceresults[i] = 5
        $('#dice' + (i+1)).removeClass('spintoright')
        $('#dice' + (i+1)).addClass('spintobottom')
        break
      }
    }
    $('#fourtofivebutton').prop('disabled', true)
    for (i=0; i<diceingame.number; i++){
      if (diceresults[i] === 4){
        buttondisable2()
        break
      }
    }
  }
}

let modals = new ModalHandler
