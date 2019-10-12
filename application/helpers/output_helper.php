<?php
/**
 * Created by PhpStorm.
 * User: mu
 * Date: 2019-10-11
 * Time: 17:54
 */

if(!function_exists('view')){
	/**
	 * @param string $template 句点分割，从模版目录开始找模版文件 user.login => /user/login.html
	 * @param array  $data 只想模版的参数
	 * @param bool   $return 编译后的模版数据
	 *
	 * @return mixed
	 */
	function view($template='',$data= array(),$return = FALSE)
	{
		if (strrpos('html',$template)=== false){
			$template = join(DIRECTORY_SEPARATOR,explode('.',$template)).'.html';
		}
		$ci = & get_instance();
		
		return $ci->smarty->view($template,$data,$return);
	}
}