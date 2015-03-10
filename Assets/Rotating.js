#pragma strict

var eButton : Canvas;
var rot : GameObject;
var spin : GameObject;

function Start () {

	eButton.enabled = false;

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.name == "Rotating"){
		eButton.enabled = true;
	}

	if(col.gameObject.name == "Sound"){
		eButton.enabled = true;
	}

	if(col.gameObject.name == "Level Load"){
		eButton.enabled = true;
	}

	if(col.gameObject.name == "Button"){
		eButton.enabled = true;
	}

	if(col.gameObject.name == "Spinner"){
		eButton.enabled = true;
	}

	if(col.gameObject.name == "GUI"){
		eButton.enabled = true;
	}
}

function OnTriggerStay (col : Collider) {

	if(col.gameObject.name == "Rotating"){

		if(Input.GetKeyDown(KeyCode.E)){
			
			eButton.enabled = false;
			Debug.Log("Pressed");
			//rot = col.gameObject.GetComponent("Rotating");
			rot.transform.Rotate(0, Time.deltaTime *  10, 100);

		}

	}

	if(col.gameObject.name == "Sound"){

		if(Input.GetKeyDown(KeyCode.E)){
		
			eButton.enabled = false;
			audio.Play();

		}

	}

	if(col.gameObject.name == "Level Load"){

		if(Input.GetKeyDown(KeyCode.E)){
		
			eButton.enabled = false;
			Application.LoadLevel(0);

		}


	}

	if(col.gameObject.name == "Button"){

	//spin = gameObject.GetComponent("Spinner");
		if(Input.GetKeyDown(KeyCode.E)){

			eButton.enabled = false;
			spin.transform.Rotate(0,Time.deltaTime * 10,100);

		}

	}

	if(col.gameObject.name == "Spinner"){

	//spin = col.GetComponent("Spinner");
		if(Input.GetKeyDown(KeyCode.E)){

			eButton.enabled = false;

			spin.transform.Rotate(0,0,-100);
		}

	}

	if(col.gameObject.name == "GUI"){



		if(Input.GetKeyDown(KeyCode.E)){

			eButton.enabled = false;
			//insert GUI here
		}

	}
}

function OnTriggerExit(col : Collider){
	eButton.enabled = false;
}