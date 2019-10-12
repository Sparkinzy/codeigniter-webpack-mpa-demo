<?php
/**
 * Created by PhpStorm.
 * User: mu
 * Date: 2019-10-12
 * Time: 15:00
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Product  extends CI_Controller {

	public function show()
	{
		return view('default.product.show');
	}

}

/* End of file product.php */