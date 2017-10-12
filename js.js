<!--
var Rollpic1 = "images/Rotator/DSC_0505.jpg";
var Rollpic2 = "images/Rotator/DSC_0457.jpg";
var Rollpic3 = "images/Rotator/DSC_0229.jpg";

var PicNumber=1;
var NumberOfPictures=3;
var HowLongBetweenPic=3;

function SwitchPic(counter){

	if(counter < HowLongBetweenPic){
	
		counter++;
		
		window.status="Switch picture at 3 : "+counter+" PicNumber: "+PicNumber+" ";
		
		document.roll.src = eval("Rollpic" + PicNumber);
		
		CallSwitchPic=window.setTimeout("SwitchPic("+counter+")",1500); 
		
		}
		
		else{
			if(PicNumber < NumberOfPictures){
				PicNumber++;
				SwitchPic(0);
			}
			else{
				PicNumber=1;
				SwitchPic(0);
				}
	
		}

}
-->