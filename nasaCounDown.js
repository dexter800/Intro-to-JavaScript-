var count = 60; 
while (count >=0){
	if (count ===50){
		console.log("Orbiter transfers from ground to internal power");
	}
	else if (count ===30){
		console.log("Ground launch sequencer is go for auto sequence start");
	}
	else if (count ===16){
		console.log("Activate launch pad sound suppression system");
	}
	else if (count ===10){
		console.log("Activate main engine hydrogen burnoff system");
	}
	else if (count ===6){
		console.log("Main engine start");
	}
	else if (count ===0){
		console.log("Solid rocket booster ignition and liftoff!");
	}else{
	console.log("T-" +count + " seconds")
    }
    count--;
}

// We can also solve this following. 
var time = 60; 
while (time>=0){
	switch (time){
		case 50: console.log("Orbiter transfers from ground to internal power");
		break;
	    case 31: console.log("Ground launch sequencer is go for auto sequence start"); 
	    break;
	    case 16: console.log("Activate launch pad sound suppression system"); 
	    break;
	    case 10: console.log("Activate main engine hydrogen burnoff system"); 
	    break;
	    case 6: console.log("Main engine start"); 
	    break;
	    case 0: console.log("Solid rocket booster ignition and liftoff!"); 
	    break;
	    default: console.log("T-"+time+" seconds");
	}
	time--;
}