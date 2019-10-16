<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 */
	public function index()
	{
//		$this->load->view('welcome_message');
		return view('default.product.show');
	}
}
