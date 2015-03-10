#pragma strict

var moveSpeed : float = 5;

function Update () {

	var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
	var jump : float;

	transform.Translate(h, 0, 0);

		//yield WaitForSeconds(2);

	if(Input.GetButtonDown("Jump")){

		rigidbody.velocity.y = 5;

		//yield WaitForSeconds (2);
	}




}

function OnTriggerEnter (death : Collider){

		Application.LoadLevel (0);
}