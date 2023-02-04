// Code your solution in this file!
const HeadQaters =  42
function distanceFromHqInBlocks(someValue) {
    if (someValue >= HeadQaters){
        return someValue - HeadQaters
}   else (HeadQaters <= someValue )
    return HeadQaters- someValue  //returns the number of blocks given a value

  }
  distanceFromHqInBlocks(someValue);


  function distanceFromHqInFeet (someValue){
    let DistanceInFeet = distanceFromHqInBlocks(someValue)*264
        return DistanceInFeet
    }
    distanceFromHqinFeet(distanceFromHqInBlocks);

  function distanceTravelledInFeet(start,destination){
    if (start >= destination){
        return (start - destination)* 264
}   else (destination <= start )
    return (destination- start)*264



  }
  
  function  calculatesFarePrice(start, destination){
   let Dis = distanceTravelledInFeet(start,destination)
   /*if (Dis >2000){
        return 25
   } 
    else if (Dis < 400){
        return 1}
    else (Dis<2000){
        
        return 2.56}*/
    
    switch(true){
        case Dis > 2000:
            return 25
        case Dis< 400:
            return 1
        case Dis < 2000:
            return 2.56
        case Dis > 2500:
            return 'cannot travel that far'
        
        

    }

    }    


   
    



    