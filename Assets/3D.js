#pragma strict

enum RotationAxes{ MouseXAndY = 0, MouseX = 1, MouseY = 2}

var axes : RotationAxes = RotationAxes.MouseXAndY;

var moveSpeed : float = 5;
var xSensitivity : float = 5;
var ySensitivity : float = 5;
var yMin : float = -30;
var yMax : float = 30;
var yRot: float = 0;

var jumpDelay: boolean;

function Update () {

	MoveAround();

	LookAround();

}

function MoveAround(){

	var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
	var d : float = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;

		transform.Translate(h,0,d);

	if(Input.GetKeyDown(KeyCode.Space) && jumpDelay == false){

			Jump();
	}

}

function LookAround(){

	if (axes == RotationAxes.MouseXAndY){

		var xRot : float = transform.localEulerAngles.y + Input.GetAxis("Mouse X") * xSensitivity;
		
		yRot += Input.GetAxis("Mouse Y") * ySensitivity;
		yRot = Mathf.Clamp (yRot, yMin, yMax);


		transform.localEulerAngles = new Vector3(-yRot, xRot, 0);
	}

	else if (axes == RotationAxes.MouseX) {

		var rotX : float = Input.GetAxis("MouseX") * xSensitivity;
		transform.Rotate(0, rotX, 0);
	}

	else {
		yRot += Input.GetAxis("Mouse Y") * ySensitivity;
		yRot = Mathf.Clamp (yRot, yMin, yMax);

		transform.localEulerAngles = new Vector3(-yRot, transform.localEulerAngles.y, 0);
	}

	


	/*yRott = transform.localRotation.x;

	transform.Rotate(yRot, xRot, 0);

	Debug.Log(yRott);

	if(yRott <= 0.1){

		transform.Rotate(0.1,0,0);

	}

	if(yRott <= -0.1){

		transform.Rotate(-0.1,0,0);

	}*/

}

function Jump() {
		rigidbody.velocity.y = 5;
		jumpDelay = true;
		yield WaitForSeconds(1);
		jumpDelay = false;
	
}

function OnTriggerEnter (swim: Collider){
	
	Debug.Log("In Water");
}